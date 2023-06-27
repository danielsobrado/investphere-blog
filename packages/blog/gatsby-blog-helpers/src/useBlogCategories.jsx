import { useStaticQuery, graphql } from 'gatsby'
import dedupe from 'dedupe'

export const useBlogCategories = () => {
  const { allArticleCategory } = useStaticQuery(categoriesQuery)

  // Check if categories are available
  if (!allArticleCategory.nodes) return null;

  // Remove duplicates and sort categories in descending order
  const dedupedAndSortedCategories = dedupe(allArticleCategory.nodes, node => node.slug)
    .sort((a, b) => b.name.localeCompare(a.name));

  return dedupedAndSortedCategories;
}

const categoriesQuery = graphql`
  query allArticleCategoryQuery {
    allArticleCategory {
      nodes {
        ...ArticleCategory
      }
    }
  }
`
