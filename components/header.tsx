
import AppButton from "./AppButton";


export const Header = () =>{
    return(
        <header className="px-20 py-4 lg:px-40 pb-46">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <h1 className="text-zinc-800 font-semibold text-xl">Course builder</h1>
                <AppButton/>
            </div>
        </header>
    )
}