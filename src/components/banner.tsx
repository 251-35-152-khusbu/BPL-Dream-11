import bannerImage from '../assets/banner-main.png';

const Banner = () => {
    return (
        <section className="container mx-auto grid min-h-100 justify-center items-center gap-8 rounded-2xl bg-linear-to-r from-blue-900 to-blue-700 px-6 py-10 text-white md:grid-cols-2 md:px-12">
            <img
                className="mx-auto w-48 md:w-64"
                src={bannerImage}
                alt="Cricket bats, stumps, and a ball"
            />
            <div className="items-center gap-4 text-center md:items-start md:text-left">
                <h2 className="text-3xl font-bold md:text-4xl">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h2>
                <p>Beyond Boundaries, Beyond Limits</p>
                <button className="rounded-xl border-2 border-black bg-amber-400 px-6 py-3 font-semibold text-black">
                    Claim Free Credit
                </button>
            </div>
        </section>
    );
};

export default Banner;