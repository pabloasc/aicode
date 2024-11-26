import { Helmet } from 'react-helmet-async';
import { EnvelopeSimple, GithubLogo } from '@phosphor-icons/react';

export function Submit() {
  return (
    <>
      <Helmet>
        <title>Submit an AI Coding Assistant | aicode.fyi</title>
        <meta name="description" content="Submit a new AI coding assistant to be featured on aicode.fyi. Help us maintain the most comprehensive directory of AI programming tools." />
      </Helmet>

      <main className="flex-grow">
        <div className="container py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Submit an Assistant
            </h1>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <EnvelopeSimple size={48} className="mx-auto mb-6 text-gray-600" />
                
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Email Submission
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Contact us at{' '}
                  <a 
                    href="mailto:team@soarkite.com"
                    className="text-gray-900 font-medium hover:underline"
                  >
                    team@soarkite.com
                  </a>
                  {' '}to submit a new assistant for review.
                </p>

                <div className="text-sm text-gray-500">
                  We review all submissions carefully to ensure they meet our quality standards.
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <GithubLogo size={48} className="mx-auto mb-6 text-gray-600" />
                
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  GitHub Pull Request
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Submit directly through our GitHub repository by creating a pull request at{' '}
                  <a 
                    href="https://github.com/pabloasc/aicode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 font-medium hover:underline"
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
        </div>
      </main>
    </>
  );
}