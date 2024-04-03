import { describe, expect, test } from "vitest";
import React from "react";
import Snowman from "./Snowman";
import { render, fireEvent } from "@testing-library/react";



describe ("Snowman", function () {

  test("should only allow 6 guesses", function() {


    const {container} = render(<Snowman words={['apple']} />);

    const buttonArea = container.querySelector('.Snowman-buttons')

    fireEvent.click(buttonArea.querySelector('[value="b"]'))
    fireEvent.click(buttonArea.querySelector('[value="s"]'))
    fireEvent.click(buttonArea.querySelector('[value="r"]'))
    fireEvent.click(buttonArea.querySelector('[value="t"]'))
    fireEvent.click(buttonArea.querySelector('[value="k"]'))
    fireEvent.click(buttonArea.querySelector('[value="m"]'))

    const answer = container.querySelector('.Snowman-word')
    const loseMsg =  container.querySelector('.Snowman-lose')

    expect(buttonArea).not.toBeInTheDocument();
    expect(loseMsg).toBeInTheDocument();
    expect(answer).toContainHTML('<p class="Snowman-word">apple</p>')


  })




})