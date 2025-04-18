import Header from "@/components/common/Header";
import Footer from "@/components/common/footer";
import { getAppInfo } from "@/lib/utils";


export default function About(){

    const {app_version} = getAppInfo()
    return (
        <div>
            <Header/>
              <h1>About this app</h1>
              <p>this is a simple blog app</p>
              <p>App version: {app_version}</p>
            <Footer/>
        </div>
    )
}