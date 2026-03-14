import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = { title: "Merch — GritTemplate" };

const products = [
  { id: "01", name: "GritTemplate Jersey",      category: "Apparel",     price: "$49.99",  badge: "Best seller" },
  { id: "02", name: "Training Shorts",           category: "Apparel",     price: "$29.99",  badge: "" },
  { id: "03", name: "GritTemplate Cap",          category: "Accessories", price: "$24.99",  badge: "New" },
  { id: "04", name: "Sports Bag",                category: "Accessories", price: "$59.99",  badge: "" },
  { id: "05", name: "Compression Tee",           category: "Apparel",     price: "$34.99",  badge: "New" },
  { id: "06", name: "Water Bottle",              category: "Accessories", price: "$19.99",  badge: "Best seller" },
];

export default function MerchPage() {
  return (
    <main className="bg-[#0e132b] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#131829] pt-40 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#DA1D3A]/10 blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#DA1D3A]" />
            <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">Official store</p>
          </div>
          <h1 className="font-display text-[clamp(52px,10vw,100px)] font-black leading-[0.92] uppercase mb-6">
            Gear up<br /><span className="text-[#DA1D3A]">with Grit</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#0e132b] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-[#DA1D3A]" />
                <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">Shop all</p>
              </div>
              <h2 className="font-display text-[clamp(36px,5vw,60px)] font-black uppercase leading-[0.95]">
                Latest<br />drops
              </h2>
            </div>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed sm:text-right">
              Official GritTemplate gear for athletes and fans alike.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {products.map(({ id, name, category, price, badge }) => (
              <div key={id} className="group bg-[#131829] border border-white/5 rounded-sm overflow-hidden hover:border-[#DA1D3A]/40 transition-all duration-300 relative">
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#DA1D3A] transition-all duration-300" />

                {/* Product image placeholder */}
                <div className="relative w-full h-52 bg-[#0e132b] flex items-center justify-center border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "30px 30px" }} />
                  <span className="font-display text-6xl font-black text-white/5">GT</span>
                  {badge && (
                    <span className="absolute top-3 left-3 bg-[#DA1D3A] text-white text-xs font-medium px-2 py-1 uppercase tracking-wider">
                      {badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-[#DA1D3A] text-xs uppercase tracking-widest mb-2">{category}</p>
                  <h3 className="font-display text-lg font-black uppercase mb-3 group-hover:text-[#DA1D3A] transition-colors">{name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-black">{price}</span>
                    <button className="bg-[#DA1D3A]/10 border border-[#DA1D3A]/30 text-[#DA1D3A] text-xs font-medium px-4 py-2 rounded-sm hover:bg-[#DA1D3A] hover:text-white transition-colors uppercase tracking-wider">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
