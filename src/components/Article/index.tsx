import { useTranslation } from "react-i18next";

import React, { FC } from "react";

import styled from "styled-components";

import { ArticleCard } from "./ArticleCard";

const Intro = styled.div`
	font-size: 16px;
`;

interface Props {
	articles: Array<ArticleGlobal.Article>;
}

export const ArticleList: FC<Props> = ({ articles }) => {
	const { t } = useTranslation();

	return (
		<>
			<Intro>{t("articles.intro")}</Intro>
			{articles.map(article => (
				<ArticleCard id={article.id} title={article.title} body={article.body} key={article.id} />
			))}
		</>
	);
};
