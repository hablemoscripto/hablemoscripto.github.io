import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoPlayerProps {
    videoId?: string; // YouTube ID for now
    thumbnail?: string;
    title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, thumbnail, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Placeholder ID if none provided
    const id = videoId || 'dQw4w9WgXcQ'; // Rick Roll as placeholder default ;)

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div
            className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                    {thumbnail && (
                        <img
                            src={thumbnail}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                        />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                    <div className="relative z-10 text-center p-6">
                        <button
                            onClick={handlePlay}
                            className="w-20 h-20 rounded-full bg-brand-500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,193,7,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(255,193,7,0.5)] transition-all duration-300"
                        >
                            <Play size={32} className="text-slate-900 fill-slate-900 ml-1" />
                        </button>
                        <h3 className="text-xl font-bold text-white mb-2 max-w-lg mx-auto">{title}</h3>
                        <p className="text-brand-400 font-medium text-sm uppercase tracking-wider">Ver Lección</p>
                    </div>
                </div>
            ) : (
                <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
                    title={title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export default VideoPlayer;
