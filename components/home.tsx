import { ReactNode, FunctionComponent } from 'react'

type IntroProps = {
    children: React.ReactNode;
    isBold?: boolean;
};

const IntroText = ({ children, isBold }: IntroProps) => (
    <div className={"font-serif tracking-tighter md:tracking-tight leading-relaxed md:leading-tight text-3xl md:text-5xl lg:text-6xl xl:text-7xl " + (isBold ? "font-bold" : "font-normal")}>
        {children}
    </div>
)

type Props = {
    children?: ReactNode
}

const Home: FunctionComponent = ({ children }: Props) => (
    <section className="h-screen flex flex-col items-center justify-center">
        <IntroText>Hello! I'm</IntroText>
        <IntroText isBold>Aman Prakash Mohla</IntroText>
        <IntroText>Full stack developer</IntroText>
    </section>
)

export default Home
