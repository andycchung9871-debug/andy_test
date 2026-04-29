import { Link } from 'react-router-dom';
import { Search, LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <nav className="flex justify-between items-center h-16 px-4 md:px-8 max-w-[800px] mx-auto">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 font-display">
            InfoHub
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">最新消息</Link>
            <Link to="/" className="text-blue-600 border-b-2 border-blue-600 pb-1 text-sm font-medium">熱門活動</Link>
            <Link to="/" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">公告事項</Link>
            <Link to="/" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">關於我們</Link>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/login" className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-slate-50 transition-colors flex items-center gap-1">
            <LogIn className="w-4 h-4" /> 登入
          </Link>
          <Link to="/login" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1">
            <UserPlus className="w-4 h-4" /> 註冊
          </Link>
        </div>
      </nav>
    </header>
  );
}
