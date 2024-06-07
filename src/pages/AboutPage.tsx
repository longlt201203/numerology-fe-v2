import TextList from "@components/TextList";
import TextListItem from "@components/TextListItem";
import Typography from "@components/Typography";
import MainLayout from "@layouts/MainLayout";

export default function AboutPage() {
    return (
        <MainLayout>
            <Typography variant="h2" className="text-center">Tìm hiểu</Typography>
            <Typography variant="body" className="text-center">Bạn muốn tìm hiểu gì?</Typography>
            <TextList>
                <TextListItem>Thần số học là gì?</TextListItem>
                <TextListItem>Về tác giả</TextListItem>
                <TextListItem>Điều khoản dịch vụ</TextListItem>
            </TextList>
        </MainLayout>
    );
}