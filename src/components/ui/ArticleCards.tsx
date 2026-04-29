import { Link } from 'react-router-dom';
import { Calendar, Eye, ArrowRight, Share2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ArticleCard({ article }: { article: any }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group cursor-pointer border-t border-slate-100 pt-8 first:border-0 first:pt-0"
    >
      <Link to={`/article/${article.id}`} className="flex flex-col md:flex-row gap-6">
        {article.image && (
          <div className="w-full md:w-1/3 aspect-[16/9] md:aspect-square rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              referrerPolicy="no-referrer"
            />
          </div>
        )}
        <div className="flex-grow flex flex-col justify-center space-y-3">
          <div className="flex items-center space-x-3">
            <span className={`text-label-sm font-bold tracking-wide uppercase ${article.categoryColor || 'text-daily-blue'}`}>
              {article.category}
            </span>
            <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
            <span className="text-slate-500 text-xs">{article.date}</span>
          </div>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors font-display">
            {article.title}
          </h3>
          <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-4 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {article.views} 點閱</span>
              <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {article.comments} 評論</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function PinnedCard({ article, size = 'small' }: { article: any, size?: 'small' | 'large' }) {
  if (size === 'large') {
    return (
      <motion.article 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="md:row-span-2 bg-surface-pinned border border-border-subtle rounded-xl overflow-hidden group hover:shadow-md transition-all"
      >
        <Link to={`/article/${article.id}`}>
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-6 space-y-3">
            <span className="px-2 py-0.5 bg-urgent-red text-white text-[10px] font-bold rounded uppercase tracking-wider">Urgent</span>
            <h3 className="text-xl font-bold font-display leading-tight group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <p className="text-slate-600 text-sm line-clamp-2">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {article.views}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article 
      whileHover={{ y: -4 }}
      className="bg-white border border-border-subtle rounded-xl p-5 hover:shadow-sm transition-all flex flex-col justify-between"
    >
      <Link to={`/article/${article.id}`} className="space-y-2">
        <span className={`px-2 py-0.5 text-white text-[10px] font-bold rounded uppercase tracking-wider ${article.badgeColor}`}>
          {article.badge}
        </span>
        <h3 className="text-lg font-bold font-display leading-snug group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-slate-600 text-sm line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center space-x-4 text-xs text-slate-400 mt-4">
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
          <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {article.views}</span>
        </div>
      </Link>
    </motion.article>
  );
}
