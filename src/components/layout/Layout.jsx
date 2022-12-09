import "./style.scss"
import { Header } from "../header/Header";
import {SideBar} from "../side-bar/SideBar";
import {Content} from "../content/Content";
import { TaskForm } from "../task-form/Task-form";

export function Layout() {
    return  (
        <div className="layout">
            <Header></Header>
            <div className="body-layout">
                <SideBar></SideBar>
                <Content></Content>
                
            </div>
        </div>
    );
}