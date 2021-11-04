import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    const ShellComponent = ({ children }) => {
        // console.log(children);
        let i = 1;
        console.log(React.Children.toArray(children));
        return React.Children.map(children, (child) => {
            console.log(child);
            const config = {
                ...child.props,
                value: i + ". " + child.props.value
            };
            i++;
            return React.cloneElement(child, config);
        });
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ShellComponent>
                <Component value="Компонент списка" />
                <Component value="Компонент списка" />
                <Component value="Компонент списка" />
            </ShellComponent>
        </CollapseWrapper>
    );
};

const Component = ({ value }) => {
    return <div>{value}</div>;
};

Component.propTypes = {
    value: PropTypes.string
};

export default ChildrenExercise;
