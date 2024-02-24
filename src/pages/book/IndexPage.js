import React from 'react';
import BasicLayout from "../../layouts/BasicLayout";
import {Outlet} from "react-router-dom";

function IndexPage(props) {
    return (
        <BasicLayout>
            <div className={'pt-5 container justify-content-center'}>
                <Outlet/>
            </div>
        </BasicLayout>
    );
}

export default IndexPage;