import { Header } from "@/components/header";
import { Chilanka } from "next/font/google"
type Props = {
    children: React.ReactNode;
}
const DashLayout = ({children}: Props) =>{
    return (
        <>
        <Header/>
        <main className="px-3 md:px-40">
            {children}
        </main>
        </>
    );
};
export default DashLayout;