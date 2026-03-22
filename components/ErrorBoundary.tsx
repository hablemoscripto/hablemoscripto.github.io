import React, { Component, ErrorInfo, ReactNode } from 'react';
import { reportError } from '../utils/errorReporting';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        reportError(error, {
            component: 'ErrorBoundary',
            action: 'componentDidCatch',
            metadata: { componentStack: errorInfo.componentStack },
        });
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-navy-950 flex items-center justify-center p-6">
                    <div className="max-w-md w-full text-center">
                        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-4xl">⚠️</span>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-3">
                            Algo salió mal
                        </h1>
                        <p className="text-navy-400 mb-8 leading-relaxed">
                            Ocurrió un error inesperado. Por favor, intenta de nuevo.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={this.handleRetry}
                                className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-navy-900 font-bold rounded-xl transition-colors"
                            >
                                Intentar de nuevo
                            </button>
                            <button
                                onClick={() => { window.location.href = '/'; }}
                                className="px-6 py-3 bg-navy-800 hover:bg-navy-700 text-white font-bold rounded-xl transition-colors border border-white/10"
                            >
                                Volver al inicio
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
