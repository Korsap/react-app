import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		const {articles} = this.props
		const articleElements = articles.map((article, index) =>
			<li key={article.id} className='article-list__li'>
				<Article article={article} defaultOpen={index === 0}/>
			</li>)
		return (
			<ul>
				{articleElements}
			</ul>
		)
	}
}
