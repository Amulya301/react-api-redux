import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import Pagination from "../Pagination/Pagination";

describe('Pagination Component', () => {
    const props = {
        todosPerPage: 20,
        totalTodosQuantity: 40,
        onChangePage: jest.fn()
    }

    test('fire  pagination button ', async () => {
        render(<Pagination {...props} />);

    const page = screen.getByRole('button', {name:'2'});

    fireEvent.click(page);

    expect(props.onChangePage).toHaveBeenCalledWith(2);
   })
})