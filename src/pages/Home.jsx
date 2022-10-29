import clsx from 'clsx';
import Style from './Home.module.css';

export default function Home() {
    return (
        <div className={clsx(Style.Home)}>
            <div>
                <h2>welcome ~</h2>
                <br />
                <p>thanks for visit my website! my name is michio (a.k.a michioxd / ah yea u can call me as Mashiro ehe)</p>
            </div>
            <div>
                <h2>who am i?</h2>
                <br />
                <p>im a developer, anime wallpaper/banner designer, rhythm game player, and yea student</p>
                <p>im from Vietnam</p>
            </div>
            <div>
                <h2>love</h2>
                <br />
                <p>NEKOMIMI</p>
            </div>
            <div>
                <h2>what can i do?</h2>
                <br />
                <p>build a mobile app, Windows app, Website, non-stupid tools, design some stupid image? brr..., powerpoint :)?</p>
            </div>
            <div>
                <h3>programming</h3>
                <br />
                <p>JavaScript / PHP / Node.JS / C# / C++ / Lua (a little)</p>
            </div>
            <div>
                <h3>JavaScript libs/framework im using/used</h3>
                <br />
                <p>React / Vue / Quasar / jQuery / Ember.js (no longer use it...)</p>
            </div>
            <div>
                <h2>rhythm game im playing?</h2>
                <br />
                <p>osu! / Arcaea / Phigros / Etterna / Muse Dash / Rotaeno / Orzmic</p>
            </div>
        </div>
    )
}