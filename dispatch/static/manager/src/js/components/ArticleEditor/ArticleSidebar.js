import React from 'react'

import { Tabs, TabList, Tab, TabPanel } from '@blueprintjs/core'

import BasicFieldsTab from './tabs/BasicFieldsTab'
import FeaturedImageTab from '../Editor/tabs/FeaturedImageTab'
import DeliveryTab from '../Editor/tabs/DeliveryTab'
import TemplateTab from '../Editor/tabs/TemplateTab'
import SEOTab from '../Editor/tabs/SEOTab'

require('../../../styles/components/article_sidebar.scss')

export default function ArticleSidebar(props) {
  return (
    <div className='c-article-sidebar'>
      <Tabs>
        <TabList className='c-article-sidebar__tablist'>
          <Tab className='c-article-sidebar__tab'><span className='pt-icon-standard pt-icon-application'></span>Basic fields</Tab>
          <Tab className='c-article-sidebar__tab'><span className='pt-icon-standard pt-icon-media'></span>Featured image</Tab>
          <Tab className='c-article-sidebar__tab'><span className='pt-icon-standard pt-icon-envelope'></span>Delivery</Tab>
          <Tab className='c-article-sidebar__tab'><span className='pt-icon-standard pt-icon-widget'></span>Template</Tab>
          <Tab className='c-article-sidebar__tab'><span className='pt-icon-standard pt-icon-social-media'></span>SEO</Tab>
        </TabList>

        <TabPanel className='c-article-sidebar__panel'>
          <BasicFieldsTab
            update={props.update}
            section={props.article.section}
            authors={props.article.authors || []}
            tags={props.article.tags || []}
            topic={props.article.topic}
            slug={props.article.slug}
            snippet={props.article.snippet}
            errors={props.errors} />
        </TabPanel>

        <TabPanel className='c-article-sidebar__panel'>
          <FeaturedImageTab
            update={props.update}
            featured_image={props.article.featured_image}
            entities={props.entities} />
        </TabPanel>

        <TabPanel className='c-article-sidebar__panel'>
          <DeliveryTab
            update={props.update}
            importance={props.article.importance}
            reading_time={props.article.reading_time}
            integrations={props.article.integrations}
            availableIntegrations={props.integrations} />
        </TabPanel>

        <TabPanel className='c-article-sidebar__panel'>
          <TemplateTab
            update={props.update}
            template={props.article.template || 'default'}
            data={props.article.template_data || {}} />
        </TabPanel>

        <TabPanel className='c-article-sidebar__panel'>
          <SEOTab
            update={props.update}
            headline={props.article.headline}
            slug={props.article.slug}
            seo_keyword={props.article.seo_keyword || ''}
            seo_description={props.article.seo_description || ''} />
        </TabPanel>
      </Tabs>
    </div>
  )
}
