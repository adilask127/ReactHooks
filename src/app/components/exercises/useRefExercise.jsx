import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
import CardWrapper from "../common/Card";
import SmallTitle from "../common/typografy/smallTitle";
import Divider from "../common/divider";
const UseRefExercise = () => {
    // const prevDimensions = useRef({});
    const blockRef = useRef();
    const handleClick = () => {
        // if (prevDimensions.current.width !== blockRef.current.style.width) {
        //     prevDimensions.current = { width: blockRef.current.style.width };
        // }
        // if (prevDimensions.current.height !== blockRef.current.style.height) {
        //     prevDimensions.current = { height: blockRef.current.style.height };
        // }
        blockRef.current.style.width = "80px";
        blockRef.current.style.height = "150px";
        blockRef.current.textContent = "text";
    };
    return (
        <>
            <CollapseWrapper title="Упражнение">
                <p className="mt-3">
                    У вас есть блок, у которого заданы ширина и высота. Добавьте
                    кнопку, при нажатии которой изменятся следующие свойства:
                </p>
                <ul>
                    <li>Изменится содежимое блока на &quot;text&quot;</li>
                    <li>
                        высота и ширина станут равны 150 и 80 соответственно
                    </li>
                </ul>
                <div
                    className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                    style={{
                        height: 40,
                        width: 60,
                        color: "white"
                    }}
                >
                    <small>Блок</small>
                </div>
            </CollapseWrapper>
            <CardWrapper>
                <SmallTitle className="card-title">Домашнее задание</SmallTitle>
                <Divider />
                <div
                    ref={blockRef}
                    className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                    style={{
                        height: 40,
                        width: 60,
                        color: "white"
                    }}
                >
                    <small>Блок</small>
                </div>
                <button className="btn btn-primary mt-1" onClick={handleClick}>
                    Изменить Блок
                </button>
            </CardWrapper>
        </>
    );
};

export default UseRefExercise;
