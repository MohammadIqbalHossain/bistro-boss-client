import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
    return (
        <Parallax
            bgImage={img}
            strength={200}
            renderLayer={(percentage) => (
                <div>
                    <div
                        style={{
                            position: "absolute",
                            background: `rgba(255, 125, 0, ${percentage * 1})`,
                            left: "50%",
                            top: "50%",
                            borderRadius: "50%",
                            transform: "translate(-50%,-50%)",
                            width: percentage * 500,
                            height: percentage * 500
                        }}
                    />
                </div>
            )}
        >
            <div style={{ height: 500 }}>
                <div className="hero h-[600px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center textj-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">{description}</p>

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;