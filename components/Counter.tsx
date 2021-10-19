import React from "react";

export interface CounterCallback {
    update: (value: number) => void;
}

interface CounterProps {
    initialValue: number;
    onMounted: (callback: CounterCallback) => void;
}

interface CounterState {
    previous: number;
    value: number;
}

export default class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
        this.state = {
            previous: props.initialValue,
            value: props.initialValue,
        };
    }

    animateValue(start: number, end: number, duration: number) {
        let startTimestamp = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            this.setState({
                value: Math.floor(progress * (end - start) + start),
            });
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    updateBound(target: number) {
        this.animateValue(this.state.previous, target, 1000);
        this.setState({ previous: target });
    }

    componentDidMount() {
        this.props.onMounted({
            update: (value: number) => this.updateBound(value),
        });
    }

    render() {
        return <span>{this.state.value.toLocaleString()}</span>;
    }
}
