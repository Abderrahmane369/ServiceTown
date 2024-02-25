import { Component } from "react";
import "./App.sass";
import { Layout } from "antd";
import NavBar from "./components/navbar.jsx";
import AuthBar from "./components/authbar.jsx";
import SearchBar from "./components/searchbar.jsx";

const { Header, Footer, Content } = Layout;

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Header className="header">
                        <div className="st-logo"> ServiceTown </div>
                        <NavBar />
                        <SearchBar />
                        <AuthBar />
                    </Header>
                    <Content>
                        
                    </Content>
                    <Footer>Copyright</Footer>
                </Layout>
            </div>
        );
    }
}
