const work_exp = [
    {
        role: 'Web Developer',
        company: 'Avena Tech Corporation',
        bullets: [
            'Redesigned websites in Figma and developed them in React.js and Tailwind.css improving load times by 75%',
            'Successfully diagnosed and resolved complex issues with WordPress websites, including troubleshooting plugin conflicts, database connectivity problems, and server-related issues',
            'Communicated and organized meetings with clients to discuss requirements and design changes'
        ],
        date: 'Jul 2023 - Present'
    },
    {
        role: 'Research Assistant',
        company: 'Simon Fraser Univserity',
        bullets: [
            'Developed Unity simulations for IMU sensor data in order to analyze whether it accurately matches the real world for machine learning models',
            'Conducted various tests using machine learning and T2M-GPT while modifying the code base to collect XYZ and rotational data generated from training data',
            'Collaborated with graduate students from SFU and Darthmouth College under the supervision of Dr. Xing-Dong Yang'
        ],
        date: 'Jun 2023 - Sept 2023'
    },
    {
        role: 'Tech Support',
        company: 'Auphan Software',
        bullets: [
            'Resolved 1000+ tickets for POS software systems, payment processor integration, and software installation with big North American companies',
            'Collaborated with sales, development, and technical support teams to communicate regression reports and ensured tracking and support until resolution',
            'Troubleshooted database and server outages involving Apache, PostgreSQL, and pgbouncer',
        ],
        date: 'Mar 2021 - Aug 2021'
    }
]


const Experience = () => {
    return (
        <section id='experience' className='flex flex-col items-center bg-black text-white '>
            <div className='mx-12 md:mx-24 w-[80%]'>
                <hr className='p-12 mt-12' />
                <h1 className='font-extralight text-4xl mb-12'>EXPERIENCE</h1>
                <div className='flex flex-col gap-14'>
                    {
                        work_exp.map((work, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-4'>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='text-lg md:text-2xl'>{work.role}</h2>
                                        <h3 className='text-sm md:text-lg'>{work.date}</h3>
                                    </div>
                                    <h3 className='text-blue-500'>{work.company}</h3>
                                    <ul className='list-disc pl-5'>
                                        {
                                            work.bullets.map((bullet, index) => {
                                                return (
                                                    <li key={index} className='mb-1'>{bullet}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </section>
    );
}
export default Experience;