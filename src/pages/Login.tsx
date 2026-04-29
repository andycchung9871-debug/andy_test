import { Mail, Lock, Eye, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4 bg-pattern relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[440px] bg-white rounded-xl border border-border-subtle p-8 md:p-10 relative z-10 shadow-xl shadow-slate-200/50"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
            <span className="text-white font-bold text-2xl">H</span>
          </div>
          <h1 className="text-3xl font-bold font-display tracking-tight text-on-surface">InfoHub</h1>
          <p className="text-slate-500 mt-2">歡迎回到社區資訊中心</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700" htmlFor="email">電子郵件 / 帳號</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border-subtle focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none bg-surface-bright" 
                id="email" 
                name="email" 
                placeholder="example@infohub.com" 
                type="email" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-slate-700" htmlFor="password">密碼</label>
              <a className="text-xs text-primary hover:underline transition-all" href="#">忘記密碼？</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                className="w-full pl-10 pr-12 py-3 rounded-lg border border-border-subtle focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none bg-surface-bright" 
                id="password" 
                name="password" 
                placeholder="••••••••" 
                type="password" 
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-on-surface transition-colors" type="button">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" id="remember" type="checkbox" />
            <label className="text-sm text-slate-600 cursor-pointer select-none" htmlFor="remember">記住我的登入狀態</label>
          </div>

          <button className="w-full py-3 px-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-primary/20" type="submit">
            <span>登入</span>
            <LogIn className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-600">
            還沒有帳號嗎？ 
            <a className="text-primary font-bold hover:underline ml-1" href="#">立即註冊</a>
          </p>
        </div>

        <div className="mt-6 flex flex-col space-y-4">
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-slate-100"></div>
            <span className="mx-4 text-xs text-slate-400">或使用其他方式</span>
            <div className="flex-grow border-t border-slate-100"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center space-x-2 py-2.5 px-4 border border-border-subtle rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
              <img alt="Google" className="w-5 h-5" src="https://www.google.com/favicon.ico" />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 py-2.5 px-4 border border-border-subtle rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
              <div className="w-5 h-5 bg-[#1877F2] rounded-full flex items-center justify-center text-white text-[10px] font-bold">f</div>
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
