import React, { useState } from 'react';
import { LayoutDashboard, FileText, Tags, Users, Settings, PlusCircle, Search, Bell, ChevronRight, Bold, Italic, List, Link as LinkIcon, Image as ImageIcon, Code, CloudUpload, X, Pin, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '選擇分類...',
    is_pinned: false,
    content: '',
    image_url: '',
    scheduled_at: '',
    seo_keywords: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || formData.category === '選擇分類...' || !formData.content) {
      alert('請填寫標題、分類與正文內容');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from('announcements')
        .insert([
          {
            title: formData.title,
            category: formData.category,
            is_pinned: formData.is_pinned,
            content: formData.content,
            image_url: formData.image_url || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', // 預設圖
            scheduled_at: formData.scheduled_at || null,
            seo_keywords: formData.seo_keywords
          }
        ]);

      if (error) throw error;

      alert('公告已成功發布！');
      navigate('/');
    } catch (error: any) {
      alert('發布失敗: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-surface-bright">
      {/* SideNavBar */}
      <aside className="hidden lg:flex flex-col w-64 fixed left-0 top-0 bottom-0 bg-slate-900 text-white h-full border-r border-slate-800 z-50">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-lg font-bold font-display">後台管理系统</h2>
          <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">Management Console</p>
        </div>
        
        <div className="flex-1 px-4 py-6 space-y-8 overflow-y-auto">
          <nav className="space-y-1">
            <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="儀表板" />
            <NavItem icon={<FileText className="w-5 h-5" />} label="內容管理" active />
            <NavItem icon={<Tags className="w-5 h-5" />} label="分類標籤" />
            <NavItem icon={<Users className="w-5 h-5" />} label="用戶權限" />
            <NavItem icon={<Settings className="w-5 h-5" />} label="系統設定" />
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center overflow-hidden border border-slate-600">
            <img 
              alt="Admin" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaAtQnoaaiNknA2YtJ4vaIGTFQAJM1wB1BXR7HUQNyVfcvx_Qbf4eIuRRJJDJHj2tELc34X61aZcLOpbwnKe3Jw2gVFjHdvdGzlgJk1wasS6fGGDqkGFNR28MA2Pp_TCBQRurg5-BTHGQu1Gh3MXf2IZzeRf0t91WTqyBvgdA0Wv-MJ9RlDjBXxLhD75QzMmzKrCtPk-dbcRtb9XZnzi0hHJhKzI198DigbRZ_243jH6DY-gwZqQpdaEXBQ1GBHOO0xb5ld4ehKhRI" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate">Admin User</p>
            <p className="text-[10px] text-slate-400 truncate">Super Admin</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <form onSubmit={handleSubmit} className="flex-1 lg:ml-64 flex flex-col">
        <header className="bg-white border-b border-slate-200 h-16 sticky top-0 z-40 px-6 flex items-center justify-between">
          <h1 className="text-xl font-bold font-display text-slate-900">InfoHub</h1>
          <div className="flex items-center space-x-4">
            <button type="button" className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-all">
              <Search className="w-5 h-5" />
            </button>
            <button type="button" className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 p-6 md:p-10 max-w-[900px] mx-auto w-full">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <nav className="flex items-center space-x-2 text-slate-400 text-xs mb-3">
                <span>內容管理</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-blue-600 font-bold">發布新內容</span>
              </nav>
              <h2 className="text-3xl font-bold font-display text-slate-900">發布新內容</h2>
            </div>
            <div className="flex space-x-3">
              <button 
                type="button" 
                onClick={() => navigate('/')} 
                className="px-6 py-2.5 rounded-xl border border-border-subtle text-slate-600 font-bold hover:bg-slate-50 transition-colors"
                disabled={loading}
              >
                取消
              </button>
              <button 
                type="submit" 
                className="px-10 py-2.5 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : '發布內容'}
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <section className="bg-white border border-border-subtle rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="grid gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">文章標題</label>
                  <input 
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none font-bold text-xl text-slate-900 placeholder:text-slate-300 transition-all" 
                    placeholder="請輸入吸引人的標題..." 
                    type="text" 
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">分類標籤</label>
                    <select 
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none text-slate-700 bg-white cursor-pointer transition-all"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option>選擇分類...</option>
                      <option>最新消息</option>
                      <option>熱門活動</option>
                      <option>重要公告</option>
                      <option>社區動態</option>
                    </select>
                  </div>
                  <div className="flex flex-col justify-end">
                    <label className="flex items-center cursor-pointer p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                      <input 
                        className="sr-only peer" 
                        type="checkbox" 
                        checked={formData.is_pinned}
                        onChange={(e) => setFormData({ ...formData, is_pinned: e.target.checked })}
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all relative"></div>
                      <span className="ml-3 text-sm font-bold text-slate-700 flex items-center">
                        <Pin className="w-3.5 h-3.5 mr-1" />
                        將此文章置頂顯示
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">正文內容</label>
                  <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center space-x-2">
                      <EditorBtn icon={<Bold className="w-4 h-4" />} />
                      <EditorBtn icon={<Italic className="w-4 h-4" />} />
                      <EditorBtn icon={<List className="w-4 h-4" />} />
                      <div className="h-4 w-[1px] bg-slate-300 mx-1"></div>
                      <EditorBtn icon={<LinkIcon className="w-4 h-4" />} />
                      <EditorBtn icon={<ImageIcon className="w-4 h-4" />} />
                      <EditorBtn icon={<Code className="w-4 h-4" />} />
                    </div>
                    <textarea 
                      className="w-full px-6 py-4 outline-none resize-none text-slate-700 placeholder:text-slate-300 min-h-[300px]" 
                      placeholder="在此處編寫您的內容..."
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    ></textarea>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border border-border-subtle rounded-2xl p-6 md:p-8 shadow-sm">
              <label className="block text-sm font-bold text-slate-700 mb-4">封面圖片網址 (可暫時輸入 Unsplash 連結)</label>
              <input 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all placeholder:text-slate-300" 
                placeholder="https://example.com/image.jpg"
                type="text"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              />
            </section>

            <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-sm font-bold mb-6 flex items-center">
                <Settings className="w-4 h-4 mr-2 text-blue-400" />
                進階發布選項
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center justify-between p-4 bg-slate-800 rounded-xl">
                  <div>
                    <p className="text-sm font-bold">排程發布</p>
                    <p className="text-[10px] text-slate-400">自動於特定時間上線</p>
                  </div>
                  <input 
                    className="bg-slate-700 border-none rounded-lg text-xs p-1.5 focus:ring-1 focus:ring-blue-400 outline-none text-white" 
                    type="datetime-local" 
                    value={formData.scheduled_at}
                    onChange={(e) => setFormData({ ...formData, scheduled_at: e.target.value })}
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800 rounded-xl">
                  <div>
                    <p className="text-sm font-bold">SEO 關鍵字</p>
                    <p className="text-[10px] text-slate-400">自定義搜尋引擎標籤</p>
                  </div>
                  <input 
                    className="bg-slate-700 border-none rounded-lg text-xs p-1.5 w-32 focus:ring-1 focus:ring-blue-400 outline-none" 
                    placeholder="關鍵字..." 
                    type="text" 
                    value={formData.seo_keywords}
                    onChange={(e) => setFormData({ ...formData, seo_keywords: e.target.value })}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </form>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a className={`flex items-center space-x-3 p-3.5 rounded-xl transition-all duration-200 ${
      active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'text-slate-400 hover:text-white hover:bg-slate-800'
    }`} href="#">
      {icon}
      <span className="text-sm font-bold">{label}</span>
    </a>
  );
}

function EditorBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button type="button" className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-slate-600 hover:text-primary">
      {icon}
    </button>
  );
}

