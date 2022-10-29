import clsx from 'clsx';
import Style from './BlogItem.module.css';

export default function BlogItem({ title, time, preview }) {
    return (
        <div className={clsx(Style.BlogItem)}>
            <div className={clsx(Style.BlogItemPreview)} style={{ backgroundImage: 'url(' + preview + ')' }}></div>
            <div className={clsx(Style.BlogItemShine)}></div>
            <div className={clsx(Style.BlogItemInfo)}>
                <h4>{title}</h4>
                <p className={clsx(Style.BlogItemInfoTime)}><i className="fa-duotone fa-clock"></i> <span>3 hours ago</span></p>
            </div>
        </div>
    );
}