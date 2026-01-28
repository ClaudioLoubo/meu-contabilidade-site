import React from 'react'

const posts = [
  { id: 1, title: 'Dicas para reduzir impostos', excerpt: 'Veja como economizar nos tributos de forma legal e estratégica.' },
  { id: 2, title: 'Planejamento Financeiro', excerpt: 'A importância de um bom planejamento para sua empresa.' }
]

export default function Blog() {
  return (
    <section id="blog" className="py-16 mx-auto max-w-7xl ">
      <h2 className="text-3xl font-bold text-center mb-10">Blog</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p>
            <a href="#" className="text-blue-700 hover:underline">Ler mais</a>
          </div>
        ))}
      </div>
    </section>
  )
}
