// Exports portfolio-data.js as valid JSON so external clients (the companion mobile app)
// can fetch it directly, since portfolio-data.js itself is JS (const + module.exports),
// not parseable JSON. Also scrapes blog.html and recommendations.html so the app's Blog
// and Recommendations pages stay in sync with the live site content (single source of truth).

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const data = require('./portfolio-data.js');

function extractBlogPosts() {
    const html = fs.readFileSync(path.join(__dirname, 'blog.html'), 'utf8');
    const $ = cheerio.load(html);
    const posts = [];

    $('.blog-card').each((_, el) => {
        const card = $(el);
        const metaSpans = card.find('.blog-meta span');
        posts.push({
            title: card.find('h3').first().text().trim(),
            excerpt: card.find('.blog-content > p').first().text().trim(),
            date: metaSpans.eq(0).text().replace(/\s+/g, ' ').trim(),
            readTime: metaSpans.eq(1).text().replace(/\s+/g, ' ').trim(),
            tags: card.find('.blog-tag').map((__, t) => $(t).text().trim()).get(),
            url: card.find('a.read-more').attr('href')
        });
    });

    return posts;
}

function extractRecommendations() {
    const html = fs.readFileSync(path.join(__dirname, 'recommendations.html'), 'utf8');
    const $ = cheerio.load(html);
    const recs = [];

    $('.recommendation-card').each((_, el) => {
        const card = $(el);
        recs.push({
            name: card.find('.recommender-name').text().trim(),
            title: card.find('.recommender-title').text().trim(),
            date: card.find('.recommendation-date').text().trim(),
            relationship: card.find('.recommendation-relationship').text().trim(),
            quote: card.find('.recommendation-content p').text().trim()
        });
    });

    return recs;
}

function generateDataJSON() {
    console.log('Generating portfolio-data.json from portfolio-data.js, blog.html, recommendations.html...');
    const outputPath = path.join(__dirname, 'portfolio-data.json');
    const fullData = {
        ...data,
        blog: extractBlogPosts(),
        recommendations: extractRecommendations()
    };
    fs.writeFileSync(outputPath, JSON.stringify(fullData, null, 2));
    console.log(`portfolio-data.json generated successfully: ${outputPath}`);
    return outputPath;
}

module.exports = { generateDataJSON };

if (require.main === module) {
    try {
        generateDataJSON();
        process.exit(0);
    } catch (error) {
        console.error('Failed to generate portfolio-data.json:', error);
        process.exit(1);
    }
}
