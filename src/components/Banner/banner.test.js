import React from 'react';
import ReactDOM from 'react-dom';
import { Banner1, Banner2 } from '../Banner';
import { Button } from 'react-bootstrap';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

// banner 1
it("renders Banner1 without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Banner1 text='test button' button={<Button>Click Me</Button>}/>, div)
})
it("renders banner1 text", () => {
    const {getByTestId} = render(<Banner1 text="test" button={<Button>Click Me</Button>}/>);
    expect(getByTestId('banner-text')).toHaveTextContent("test")
})
it("renders banner1 button", () => {
    const {getByTestId} = render(<Banner1 text="test" button={<Button>Click Me</Button>}/>);
    expect(getByTestId('button')).toHaveTextContent("Click Me")
})



// banner 2
it("renders Banner2 without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Banner2 text='test button' button={<Button>Click Me</Button>}/>, div)
})

it("renders banner2 text", () => {
    const {getByTestId} = render(<Banner2 text="test2" button={<Button>Click Me Also</Button>}/>);
    expect(getByTestId('banner-text')).toHaveTextContent("test2")
})

it("renders banner2 button", () => {
    const {getByTestId} = render(<Banner2 text="test2" button={<Button>Click Me Also</Button>}/>);
    expect(getByTestId('button')).toHaveTextContent("Click Me Also")
})

