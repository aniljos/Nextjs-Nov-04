import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next React About",
};

function AboutPage(){
    return (
        <div>
            <h4>About</h4>
            <p>This is a Next.js application</p>
        </div>
    )
}

export default AboutPage;