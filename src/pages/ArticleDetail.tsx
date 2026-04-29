import { useParams, Link } from 'react-router-dom';
import { Calendar, Eye, Share2, MessageCircle, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const RELATED = [
  {
    id: 4,
    title: '混合辦公時代下的空間美學實踐',
    category: '空間轉型',
    color: 'text-event-green',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDinLuouvIRG8l3ygV6gddXs15gCgaZZjLHvklLv70RJVznBPAOhHT9zCyG9udmcqQfyeSMJ5ILwZ2oTFRs6j7PQKAnXFzTb_TN5Y3K2DknYnA6oXbsMgc72dIjfEEur8Ko15PXiTE87Cv7e9GO5pZgEVK8PC34LopQC7d8PiHagfMz5kAUa0XVD6myY4iB44GJ4dwTKayaATJcMjuUWsvXW_G6L5GsPyCWKKOKyL743oADciCYY1enGzrm3BwdVmy6KzqRK2k0Onqp',
    excerpt: '如何在後疫情時代重新定義辦公室，創造兼具效率與心理健康的工作環境...'
  },
  {
    id: 5,
    title: '家庭儲能系統：能源自主的下一波浪潮',
    category: '能源政策',
    color: 'text-urgent-red',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxE47tHK2IK8QWPi6K4UwrGW7xaf4knUl340eOpzXRNCleJEqDeUFgQcWwJeqSxtP4sGeQk8Dqgthdrg39FspoYYummyEkzvuUFeu_EJhELWaq8vmg8m28Hv7uTzSaOhhLbDmCAKs0Y5fpMF_S70nzN7ceTzY0qz6uibWjX5TeuIsupZbJ6VQzI89Bn0u7F7cN51IOyLFhcoJdTi5IEniO_xR3tdY--wYmfRC48JrZ5e9zWdSoG98Cmy3Xw5xjVU5f3NR6DIB1ehQK'
  },
  {
    id: 6,
    title: '邊緣運算如何賦予城市感知能力？',
    category: 'AI 應用',
    color: 'text-daily-blue',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvE9mbflZKgKszhRgZ7z91Guu2Cgqr_HN8ygx-Eybnqh6xHYucCXzzDuwnsNxWCWZ0fy4PAcW5EMllIDZBJOLSoxQfXCAF6ouo7NTv0_H6JVOlxgsU-LZVkaeK_N_-Hz7B1iZDkjQayB2TiOqOhfe1Az5K8LKo_DF654I2hYhHXqBTao3Gfwv90duqO71hR-j1zqn-FGwGs_fAmB-khoZp7cT6ODLE6kMXMnaiRTPgOs0-xhalJr1nEQn9RrDu7hthhFx9ScUH4feQ'
  }
];

export default function ArticleDetail() {
  const { id } = useParams();

  return (
    <div className="py-12 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm">
        <span className="bg-daily-blue text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">熱門活動</span>
        <span className="text-slate-300">•</span>
        <span className="text-slate-500">活動報導</span>
      </div>

      <article className="space-y-8">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold font-display leading-tight text-on-surface">
            2024 年度智慧城市永續發展論壇：探索未來科技與環境的和諧共生
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-border-subtle">
            <div className="flex items-center space-x-6 text-slate-500 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>2024年5月20日</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                <span>1,284 次瀏覽</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-border-subtle hover:bg-slate-50 transition-colors text-blue-600">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-border-subtle hover:bg-slate-50 transition-colors text-blue-800">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-border-subtle hover:bg-slate-50 transition-colors text-slate-700 font-medium text-sm">
                <LinkIcon className="w-4 h-4" />
                <span>複製連結</span>
              </button>
            </div>
          </div>
        </header>

        <div className="rounded-xl overflow-hidden aspect-[16/9] shadow-inner bg-slate-100 border border-border-subtle">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa3g83o0Rsyjj_Qzvpwaspnc7eURto5ciphubvkK2ZHNejHK-WhHn-pMJG1Z7yFxAVXqIyZbd8IfVhqgBLpI0SDUBxwanfB7Vm7DFeyIc8SLBgWeCfeh_QwAicYsBBjEDwX7dQ1tenGdsslaGRTbWF4Fe0iniF3Of1ofSuzZUbFe83DRS9pYDRV8y_ypnuomBbbD5baRlDqXplykEDjleDOGkrZohXCI46EWEaIAJzRuM9-kyeh9vGxBwsMsPmRcCUA5M8x72sTjv2" 
            alt="Hero" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
        </div>

        <section className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
          <p className="text-lg">
            在這個快速變遷的時代，智慧城市的發展已不再僅僅是科技的堆疊，而是關於如何透過創新技術與大自然的韻律達成平衡。本年度的「智慧城市永續發展論壇」於台北流行音樂中心盛大開幕，匯集了超過三十個國家的專家學者，共同探討 AI 與綠能技術在城市規劃中的關鍵角色。
          </p>
          <p className="text-lg">
            會議中，來自丹麥的城市設計專家特別強調了「水循環」與「智慧電網」的深度整合。他指出，透過裝設在城市各角落的感測器，我們不僅能即時監控水資源分配，更能預測能源消耗的高峰期，進而透過微電網進行動態調度。這不僅能大幅減少碳排放，更提升了城市面對氣候變遷的韌性。
          </p>
          <div className="my-10 p-8 bg-surface-pinned border-l-4 border-primary rounded-r-lg italic text-on-surface text-xl">
            "科技的終極目標並非取代自然，而是成為守護自然的力量。當建築開始學會與風對話、與光協作，城市才真正擁有了生命。"
          </div>
          <p className="text-lg">
            論壇現場也展示了多項前沿技術，包括利用廢棄建材製成的 3D 列印景觀家具，以及整合了空氣淨化功能的智慧路燈系統。這些看似微小的細節，實則是建構智慧永續生態圈的基石。
          </p>
        </section>

        <footer className="pt-12 border-t border-border-subtle">
          <div className="flex flex-wrap gap-2">
            {['智慧城市', '永續發展', '科技論壇', '2024趨勢'].map(tag => (
              <span key={tag} className="px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-600 font-medium hover:bg-slate-200 transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      </article>

      <section className="pt-20 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-display">推薦閱讀</h2>
          <Link to="/" className="text-primary font-bold text-sm flex items-center hover:underline">
            查看更多 <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 group cursor-pointer bg-white border border-border-subtle rounded-xl overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-[21/9] overflow-hidden">
              <img src={RELATED[0].image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 space-y-2">
              <span className={`text-xs font-bold uppercase ${RELATED[0].color}`}>{RELATED[0].category}</span>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors font-display">{RELATED[0].title}</h3>
              <p className="text-slate-500 text-sm line-clamp-2">{RELATED[0].excerpt}</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {RELATED.slice(1).map(item => (
              <div key={item.id} className="group cursor-pointer bg-white border border-border-subtle rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 space-y-1">
                  <span className={`text-[10px] font-bold uppercase ${item.color}`}>{item.category}</span>
                  <h3 className="text-sm font-bold group-hover:text-primary transition-colors font-display line-clamp-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
