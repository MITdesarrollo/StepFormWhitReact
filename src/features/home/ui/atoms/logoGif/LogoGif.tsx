import Logo from "../../../../../assets/logo-gift.gif";

interface Props{
    className: string;
}
export const LogoGift = ({ className } : Props) => {
    return(
        <img className={className} src={Logo} alt="Logo customer scoop"/>
    )
}
