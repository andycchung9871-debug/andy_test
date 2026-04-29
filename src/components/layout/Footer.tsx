import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-auto">
      <div className="py-8 px-4 flex flex-col md:flex-row justify-between items-center max-w-[800px] mx-auto w-full">
        <div className="mb-4 md:mb-0">
          <p className="font-display text-xs text-slate-500">© 2024 InfoHub Community. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <Link className="font-display text-xs text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline transition-colors" to="/admin">後台管理</Link>
          <a className="font-display text-xs text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline transition-colors" href="#">隱私政策</a>
          <a className="font-display text-xs text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline transition-colors" href="#">服務條款</a>
          <a className="font-display text-xs text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline transition-colors" href="#">聯絡我們</a>
        </div>
      </div>
    </footer>
  );
}
