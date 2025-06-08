import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-yellow-100 flex flex-col items-center justify-center px-6 py-12 animate-fade-in">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-rose-600 mb-4 drop-shadow-md transition-all duration-500">
          Chia tiền dễ dàng cùng{" "}
          <span className="text-orange-500">Bill Together</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed animate-fade-up">
          Quản lý chi tiêu nhóm, bữa ăn, du lịch, sinh nhật... chỉ trong vài cú
          nhấp. Không còn tranh cãi ai trả bao nhiêu, ai nợ ai!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/sign-up"
            className="px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            Bắt đầu ngay
          </Link>
          <Link
            href="/auth/login"
            className="px-6 py-3 bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
