import React from 'react';
import { create } from 'react-test-renderer';



describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="status of my first test component" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("status of my first test component");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="status of my first test component" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.length).toBe(1);
    });


    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="status of my first test component" />);
        const instance = component.root;
        let span = root.findByType("span");
        expect(span.innerText).toBe("status of my first test component");
    });




});