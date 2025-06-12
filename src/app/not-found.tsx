import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <h1 className="text-6xl font-extrabold text-destructive mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Không tìm thấy trang</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        Trang bạn đang tìm không tồn tại hoặc đã bị di chuyển. Vui lòng kiểm tra
        lại đường dẫn hoặc quay về trang chủ.
      </p>
      <Button asChild variant="outline">
        <Link href="/dashboard">Quay về trang chủ</Link>
      </Button>
    </div>
  );
}
