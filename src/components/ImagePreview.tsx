import { Component, Fragment } from 'react';

export class ImagePreview extends Component<
    { preview: string; src: string; alt: string },
    { loaded: boolean; error: boolean }
> {
    state = {
        loaded: false,
        error: false,
    };

    handleLoad = () => {
        this.setState({ loaded: true });
    };

    handleError = () => {
        this.setState({ error: true });
    };

    render() {
        const { loaded, error } = this.state;
        const { preview, src, alt } = this.props;

        return (
            <Fragment>
                <img
                    src={preview}
                    alt="preview"
                    style={{ display: !loaded ? 'block' : 'none' }}
                />
                {error && (
                    <p>An error occurred while loading the full-size image.</p>
                )}
                {!error && (
                    <img
                        src={src}
                        alt={alt}
                        onLoad={this.handleLoad}
                        onError={this.handleError}
                        style={{ display: loaded ? 'block' : 'none' }}
                    />
                )}
            </Fragment>
        );
    }
}
