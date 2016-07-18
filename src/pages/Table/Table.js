/**
 * Created by ravi.hamsa on 7/12/16.
 */
import React, {Component, PropTypes} from "react";
import {core, components} from 'react-starter';
import sessionManager from '../../others/sessionManager';
const {Table, THEAD, TD, TR, TBODY, TH}  = components.Table;
const {navigate, dataLoader, SmartWrapper, Loader, MessageStack} = core;


dataLoader.addResource('getResults', {
    type: 'static',
    data: [
        {
            id: 123,
            testName: "Test1",
            toughness: "MEDIUM",
            lastUpdated: "May 5, 2016"
        },
        {
            id: 456,
            testName: "Test2",
            toughness: "EASY",
            lastUpdated: "May 5, 2016"
        },
        {
            id: 789,
            testName: "Test3",
            toughness: "HARD",
            lastUpdated: "May 5, 2016"
        }
    ]
});

let resultsConfig = {
    dataRequests: [{
        propKey: 'records',
        requestId: 'getResults'
    }]
}


class TableExample extends Component {
    render() {
        return <div className="container">
            <SmartWrapper {...resultsConfig} >
                <Table>
                    <THEAD>
                    <TR>
                        <TH dataKey="testName" label="Test Name"></TH>
                        <TH dataKey="toughness" label="Toughness"></TH>
                        <TH dataKey="lastUpdated" label="Last update on"></TH>
                    </TR>
                    </THEAD>
                    <TBODY>
                    <TR>
                        <TD dataKey="testName"></TD>
                        <TD dataKey="toughness"></TD>
                        <TD dataKey="lastUpdated"></TD>
                    </TR>
                    </TBODY>
                </Table>
            </SmartWrapper>
        </div>
    }
}

export default TableExample;