import React from 'react';
import ReactDOM from 'react-dom';
import BigCard from '../BigCard';
import { CardButton } from '../FancyButtons';
import { BrowserRouter  as Router} from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

it("renders Big Cards without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Router>
            <BigCard 
                title={"Personal"}
                image={"https://cdn.jestic.co/wp-content/uploads/2018/09/personal-1.png"}
                price={"4.99"}
                space={"100 GB"}
                parked={"5"}
                sub={"25"} 
                databases={"5"} 
                email={"3"} 
                ram={"1.2 GB"} 
                button={<CardButton text='Select Plan' link='/'/>}
                cla={true}
            />
        </Router>
       , div)
})

it("renders Big Card text & Card Buttonw", () => {
    const {getByTestId} = render(
        <Router>
            <BigCard 
                title={"Personal"}
                image={"https://cdn.jestic.co/wp-content/uploads/2018/09/personal-1.png"}
                price={"4.99"}
                space={"100 GB"}
                parked={"5"}
                sub={"25"} 
                databases={"5"} 
                email={"3"} 
                ram={"1.2 GB"} 
                button={<CardButton text='Select Plan' link='/'/>}
                cla={true}
            />
        </Router>
    );
    expect(getByTestId('card-span')).toHaveTextContent("Popular");
    expect(getByTestId('b-title')).toHaveTextContent("Personal");
    expect(getByTestId('button')).toHaveTextContent("Select Plan");
})

    
