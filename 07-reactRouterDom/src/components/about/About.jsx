import React from 'react';

function About() {
    return (
        <div className="w-full h-auto p-10">
            <div className="w-full flex gap-5 flex-col md:flex-row justify-center items-center ">
                <div className="md:w-3/5">
                    <img src="../../src/assets/startup.png" alt="img" />
                </div>
                <div className="flex flex-col gap-4 md:w-2/5 ">
                    <h2 className="text-3xl font-bold text-center">
                        React development is carried out by passionate developers
                    </h2>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolores maxime, ea quisquam aliquam cupiditate amet, animi dolorum beatae esse saepe facilis perspiciatis, sunt reiciendis perferendis accusantium fugiat numquam necessitatibus?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;