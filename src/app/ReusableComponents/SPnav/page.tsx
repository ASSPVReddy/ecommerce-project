import { PageNav } from "../Pagenav/page"
import SideNav from "../SideNav/page"

const TopNav=()=>{
    return(
        <div className="flex">
            <SideNav />
            <PageNav />
        </div>
    )
}
export default TopNav