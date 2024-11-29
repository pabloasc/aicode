import { Helmet } from 'react-helmet-async';
import { EnvelopeSimple, GithubLogo } from '@phosphor-icons/react';
import { Header } from '../components/Header';

export function Submit() {
  return (
    <>
      <Helmet>
        <title>Submit an AI Coding Assistant | aicode.fyi</title>
        <meta name="description" content="Submit a new AI coding assistant to be featured on aicode.fyi. Help us maintain the most comprehensive directory of AI programming tools." />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Header />
        
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl text-center mb-8">
            Submit an Assistant
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8">
              <EnvelopeSimple size={32} className="mb-6" />
              
              <h3 className="text-xl mb-4">
                Email Submission
              </h3>
              
              <p className="text-base mb-6">
                Contact us at{' '}
                <a 
                  href="mailto:team@soarkite.com"
                  className="border-b border-black hover:text-accent transition-colors"
                >
                  team@soarkite.com
                </a>
                {' '}to submit a new assistant for review.
              </p>

              <div className="text-sm text-gray-500">
                We review all submissions carefully to ensure they meet our quality standards.
              </div>
            </div>

            <div className="bg-white p-8">
              <GithubLogo size={32} className="mb-6" />
              
              <h3 className="text-xl mb-4">
                GitHub Pull Request
              </h3>
              
              <p className="text-base mb-6">
                Submit directly through our GitHub repository by creating a pull request at{' '}
                <a 
                  href="https://github.com/pabloasc/aicode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-black hover:text-accent transition-colors"
                >
                  github.com/pabloasc/aicode
                </a>
              </p>

              <div className="text-sm text-gray-500">
                Follow the contribution guidelines in the repository for a smooth review process.
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}