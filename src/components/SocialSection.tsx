import React, { useState } from 'react';
import { SOCIAL_POSTS } from '../data/cafeData';
import { Instagram, Heart, MessageCircle, Share2, Sparkles, ArrowUpRight } from 'lucide-react';

export const SocialSection: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedPosts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F5F0E8] border-y border-[#2D211C]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8C5F48]">
              Community & Socials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D211C] tracking-tight [text-wrap:balance]">
              See the vibe.
            </h2>
            <p className="text-sm sm:text-base text-[#5A483E] max-w-xl font-normal">
              Follow our daily drops, behind-the-scenes barista specials, and weekend meetup stories on Instagram.
            </p>
          </div>

          {/* Social Handle Action */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#2D211C] text-white text-xs font-semibold hover:bg-[#45332B] transition-colors shadow-xs"
            >
              <Instagram className="w-4 h-4 text-[#E6A07E]" />
              <span>Follow @genzifycafe</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C4B5A8]" />
            </a>
          </div>
        </div>

        {/* Social Feed Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_POSTS.map(post => {
            const isLiked = likedPosts[post.id];

            return (
              <div
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#2D211C]/8 shadow-xs flex flex-col justify-between hover:shadow-md transition-all group"
              >
                {/* Post Top Profile Bar */}
                <div className="p-3.5 flex items-center justify-between border-b border-[#2D211C]/5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#8C5F48] flex items-center justify-center text-white text-[11px] font-bold">
                      G
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2D211C]">{post.handle}</p>
                      <p className="text-[10px] text-[#8C7A70]">{post.timestamp}</p>
                    </div>
                  </div>
                  <Instagram className="w-3.5 h-3.5 text-[#A8988B]" />
                </div>

                {/* Post Image */}
                <div className="relative aspect-square overflow-hidden bg-[#ECE4D6]">
                  <img
                    src={post.image}
                    alt={post.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                  />
                </div>

                {/* Post Interaction & Caption */}
                <div className="p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleLike(post.id)}
                        aria-label={isLiked ? "Unlike post" : "Like post"}
                        className="transition-transform active:scale-125 cursor-pointer"
                      >
                        <Heart
                          className={`w-4 h-4 transition-colors ${
                            isLiked
                              ? 'text-rose-500 fill-rose-500'
                              : 'text-[#5A483E] hover:text-rose-500'
                          }`}
                        />
                      </button>
                      <span className="flex items-center gap-1 text-[11px] text-[#705D52] font-medium">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{post.comments}</span>
                      </span>
                    </div>

                    <span className="text-[11px] text-[#8C7A70] font-medium">
                      {isLiked ? 'Liked by you' : `${post.likes} likes`}
                    </span>
                  </div>

                  <p className="text-xs text-[#4A3D36] leading-relaxed line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
