import { Search, Pin, ChevronDown } from 'lucide-react';
import { ArticleCard, PinnedCard } from '../components/ui/ArticleCards';

const ARTICLES = [
  {
    id: 1,
    title: '打造高效能遠端工作空間的 5 個實用技巧',
    category: '日常分享',
    categoryColor: 'text-daily-blue',
    date: '2024/05/22',
    excerpt: '隨著混合辦公成為常態，如何在家中建立一個既舒適又能保持專注的空間變得至關重要。我們整理了五個能立即改善效率的方法...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR0ldgvPMXdQwNLI9qSwL-fcux8q19l5rytwrlRCohkq-7Mn8ToICVW8eudFL8fVY_zOUVPgRTz6Y-RE5oc_ebrH2kUCblSG0XmzFf3eCl_SGvX3GxZin2Qfw5g5UpFvmD-Jn40r7qWpkCS9PdVakE7cxrjJ04l05q82bXD4A1OyjT1b4ASpLkfCr_lIM5Bv--MEOcpdMBly7wi5hXYQ3iqsHuCrXwrR4wjRNclXOv3eIEHvEIE6cZdSDb2B39V2n8VEo7-Dd-6SUv',
    views: '1.5k',
    comments: 24
  },
  {
    id: 2,
    title: '數據驅動決策：下半年度行銷趨勢研討會',
    category: '活動資訊',
    categoryColor: 'text-event-green',
    date: '2024/05/21',
    excerpt: '本次研討會將邀請三位業界頂尖專家，分享如何利用大數據分析掌握消費者心理，並優化行銷自動化流程...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv_J8cXozpLnroNVzlgd_6fYL_OcosEWNzZ14dGFGG5Nc2uWtmWaUVOPXjZxax_RxKMihhF2PJQiI6xlqxbX_MT4ow1BMjz3lsDgtyP7tD_LIYm_YE0ugPECR3T4Jwrjm4i5jZwlzVr0ledYEqxhJEDGypnmz4SJ5xr3PC3QNYuAljtVmGnm3JZw1IfoczRhSZxRIReqLz-UT7qc9hhL_jJuYh9Rpg2VIX0wPlkLqkaYkdZBlVT_NE-Ki1A8ZQV7geftAXsviqaliP',
    views: '2.8k',
    comments: 12
  },
  {
    id: 3,
    title: 'InfoHub 社群守則更新公告 (v2.1)',
    category: '公告事項',
    categoryColor: 'text-slate-600',
    date: '2024/05/20',
    excerpt: '為了營造更友善、多元的交流環境，我們針對「內容審核標準」與「版權保護政策」進行了細部微調。新版守則將於下個月起正式生效，請所有成員撥冗閱讀全文...',
    views: '945',
    comments: 3
  }
];

const PINNED = [
  {
    id: 'p1',
    title: '2024 年度社群發展大會：未來展望與數位轉型規劃',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHBh_1p2fdZGob0G8B86O8dcpHe4qDS5I0om-j0K4t16zku-9r_UwfQmjDVewv8nZLIw_VKvM7Di2j68u-r3F7YReSYF8mrHTj7MoQ_qRTGnvdkOvCj9Bi5YRBxUViZPo4xbpDHhd07zFyeQ0Cz_DSpTAV1nXDmdRmnvIXLiqKKDTyAU7rTA7buqIUb0akRw_alRTWxGyt0ApA87vwxb__7BAhzF1RNQDZ11AayVYxY9IZX3pN7YjNWD7N5cr1irQYhyI7qWCeNUKc',
    excerpt: '我們誠摯邀請所有成員參與今年的發展大會，共同探討如何透過技術創新提升社群參與度...',
    date: '2024/05/20',
    views: '12.4k'
  },
  {
    id: 'p2',
    title: '夏季黑客松：為永續發展提案',
    badge: 'Event',
    badgeColor: 'bg-event-green',
    excerpt: '首獎高達 10 萬元的夏季黑客松現已開放報名，歡迎各路好手組隊挑戰...',
    date: '2024/05/18',
    views: '8.2k'
  },
  {
    id: 'p3',
    title: '系統維護通知：5/25 凌晨暫停服務',
    badge: 'Update',
    badgeColor: 'bg-daily-blue',
    excerpt: '為提升資料庫效能，我們將於 5/25 進行例行維護，預計受影響時間為兩小時...',
    date: '2024/05/15',
    views: '3.1k'
  }
];

export default function Home() {
  return (
    <div className="space-y-8 py-8 animate-in fade-in duration-700">
      <section className="space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            className="w-full pl-12 pr-4 py-3 bg-white border border-border-subtle rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="搜尋資訊、活動或公告..." 
            type="text"
          />
        </div>
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button className="px-4 py-1.5 bg-primary text-white rounded-full text-sm font-medium shadow-sm">全部</button>
          <button className="px-4 py-1.5 bg-white border border-border-subtle text-slate-600 hover:border-urgent-red hover:text-urgent-red rounded-full text-sm font-medium transition-all">緊急通知</button>
          <button className="px-4 py-1.5 bg-white border border-border-subtle text-slate-600 hover:border-event-green hover:text-event-green rounded-full text-sm font-medium transition-all">活動資訊</button>
          <button className="px-4 py-1.5 bg-white border border-border-subtle text-slate-600 hover:border-daily-blue hover:text-daily-blue rounded-full text-sm font-medium transition-all">日常分享</button>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center space-x-2">
          <Pin className="w-5 h-5 text-urgent-red fill-urgent-red" />
          <h2 className="text-2xl font-bold font-display">置頂公告</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PinnedCard article={PINNED[0]} size="large" />
          <div className="flex flex-col gap-4">
            <PinnedCard article={PINNED[1]} />
            <PinnedCard article={PINNED[2]} />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-display">最新消息</h2>
          <div className="flex items-center space-x-2 text-slate-500 text-sm">
            <span>排序方式:</span>
            <div className="flex items-center cursor-pointer font-medium text-on-surface">
              最新發布 <ChevronDown className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
        <div className="space-y-8">
          {ARTICLES.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div className="flex justify-center pt-8">
          <button className="px-8 py-3 border border-border-subtle rounded-xl text-primary font-medium hover:bg-slate-50 active:bg-slate-100 transition-colors flex items-center gap-2">
            <span>載入更多資訊</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
