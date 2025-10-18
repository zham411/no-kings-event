"use client";

import React, { useState } from 'react';
import { Users, Music, MapPin, Clock, Gift, DollarSign, Shield } from 'lucide-react';

const EventDashboard = () => {
  const [activeTab, setActiveTab] = useState('event');

  const speakers = [
    { name: 'LEEANN LAWIE', role: 'LOCAL ACTIVIST' },
    { name: 'D.R. JAMES', role: 'AUTHOR & RETIRED PROFESSOR' },
    { name: 'CHASE BARBRICK', role: 'TRANS RIGHTS ADVOCATE' },
    { name: 'NATALIE CARVER, M.ED.', role: 'LOCAL TEACHER & ACTIVIST' },
    { name: 'MAGGIE DOYLE', role: 'LOCAL ACTIVIST' }
  ];

  const stPaulPrinciples = [
    'Our solidarity will be based on respect for a diversity of tactics and the plans of other groups.',
    'The actions and tactics used will be organized to maintain a separation of time or space.',
    'Any debates or criticisms will stay internal to the movement, avoiding any public or media denunciations of fellow activists and events.',
    'We oppose any state repression of dissent, including surveillance, infiltration, disruption and violence. We agree not to assist law enforcement actions against activists and others.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header with Logos */}
      <div className="bg-gradient-to-r from-blue-900/30 via-red-900/30 to-blue-900/30 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <img 
                  src="/no-kings-logo.png" 
                  alt="No Kings Logo" 
                  className="h-12 w-12 object-contain"
                />
                <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                  NO KINGS
                </div>
              </div>
              <div className="h-8 w-px bg-gray-600"></div>
              <div className="flex items-center gap-3">
                <img 
                  src="/indy-next-gen-logo.jpg" 
                  alt="Indy Next Gen Logo" 
                  className="h-12 w-auto object-contain"
                />
                <div className="text-xl font-semibold text-blue-300">
                  Indy Next Gen
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">Heritage Landing, Muskegon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Event Title Banner */}
      <div className="bg-gradient-to-r from-red-600/20 via-orange-600/20 to-red-600/20 border-b border-red-500/30">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-red-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
            NO KINGS IN WEST MICHIGAN
          </h1>
          <div className="flex items-center justify-center gap-6 text-lg flex-wrap">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="font-semibold text-blue-200">Saturday, Oct 18 • 5-7 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <div className="flex gap-2 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('event')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'event'
                ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-t-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Event Info
          </button>
          <button
            onClick={() => setActiveTab('songs')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'songs'
                ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-t-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Protest Songs
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'event' && (
          <div className="space-y-8">
            {/* Tables Section - Placeholder */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Users className="text-blue-400" />
                <span className="bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent">
                  Tables & Organizations
                </span>
              </h2>
              <p className="text-gray-400 italic">Table information coming soon...</p>
            </div>

            {/* Speakers */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="text-red-400" />
                <span className="bg-gradient-to-r from-red-300 to-blue-300 bg-clip-text text-transparent">
                  Speakers
                </span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {speakers.map((speaker, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-blue-900/20 to-red-900/20 rounded-lg p-4 border border-gray-700 hover:border-blue-500/50 transition-all"
                  >
                    <div className="font-bold text-lg text-blue-200">{speaker.name}</div>
                    <div className="text-sm text-gray-400">{speaker.role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frog Costume Contest */}
            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl p-6 border border-green-700/50 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Gift className="text-green-400" />
                <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                  Frog Costume Contest
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-2">
                <span className="font-semibold text-green-300">Join us at 5:15 PM!</span>
              </p>
              <p className="text-gray-400">
                Come dressed as a frog in honor of the Portland Frog for the chance to win a prize!
              </p>
            </div>

            {/* St. Paul Principles */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Shield className="text-blue-400" />
                <span className="bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent">
                  St. Paul Principles
                </span>
              </h2>
              <div className="space-y-4">
                {stPaulPrinciples.map((principle, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 bg-gradient-to-r from-blue-900/20 to-transparent rounded-lg p-4 border border-gray-700"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-gray-300">{principle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Donations */}
            <div className="bg-gradient-to-br from-blue-900/30 to-red-900/30 rounded-xl p-6 border border-blue-700/50 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <DollarSign className="text-blue-400" />
                <span className="bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent">
                  Support the Movement
                </span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 text-lg">
                  Local organizations will be accepting donations for our unhoused community.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <p className="font-semibold text-blue-300 mb-2">Please bring:</p>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Non-perishable food</li>
                    <li>• New hygiene products</li>
                    <li>• Camping gear</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-400 mb-3">Make a contribution to Indy Next Gen:</p>
                  <a
                    href="https://secure.actblue.com/donate/indivisibleing1359628723"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg"
                  >
                    Donate via ActBlue
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'songs' && (
          <div className="space-y-8">
            {/* This Land Is Your Land */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Music className="text-blue-400 w-8 h-8" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent">
                  This Land Is Your Land
                </h2>
              </div>
              <p className="text-gray-400 mb-4 italic">By Woody Guthrie • Written in 1940, Published in 1951</p>
              
              <div className="bg-gradient-to-r from-blue-900/20 to-red-900/20 rounded-lg p-6 mb-6 border border-gray-700">
                <div className="prose prose-invert max-w-none">
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>This land is your land, and this land is my land<br/>
                    From California to the New York Island<br/>
                    From the Redwood Forest to the Gulf Stream Waters<br/>
                    This land was made for you and me</p>

                    <p>As I went walking that ribbon of highway<br/>
                    And I saw above me that endless skyway<br/>
                    I saw below me that golden valley<br/>
                    This land was made for you and me</p>

                    <p>I roamed and rambled and I followed my footsteps<br/>
                    To the sparkling sands of her diamond deserts<br/>
                    All around me a voice was a-sounding<br/>
                    This land was made for you and me</p>

                    <p>There was a big high wall there that tried to stop me<br/>
                    Sign was painted, said, &quot;Private Property&quot;<br/>
                    But on the back side, it didn&apos;t say nothing<br/>
                    This land was made for you and me</p>

                    <p>When the sun comes shining, then I was strolling<br/>
                    And the wheat fields waving and the dust clouds rolling<br/>
                    A voice come chanting as the fog was lifting<br/>
                    This land was made for you and me</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-blue-300 mb-3">A Song of Hope and Protest</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Woody Guthrie wrote &quot;This Land Is Your Land&quot; in 1940 as a direct response to Irving Berlin&apos;s &quot;God Bless America,&quot; which he felt presented an overly sanitized view of the nation. What many people don&apos;t realize is that this beloved folk song is actually a powerful protest anthem.
                  </p>
                  <p>
                    Written during the Great Depression by a dust bowl refugee who rode the rails, the song challenges listeners to consider who really has access to the nation&apos;s abundance. While the chorus celebrates America&apos;s natural beauty, the original verses—often omitted from schoolroom versions—contained sharp critiques of private property and economic inequality.
                  </p>
                  <p>
                    From civil rights marches to labor rallies to contemporary movements for justice, &quot;This Land Is Your Land&quot; continues to be the soundtrack of resistance, proving that Guthrie&apos;s genius was wrapping radical social commentary in a melody so accessible that each generation can make it their own.
                  </p>
                </div>
              </div>
            </div>

            {/* Bella Ciao */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Music className="text-red-400 w-8 h-8" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-red-300 to-blue-300 bg-clip-text text-transparent">
                  Bella Ciao
                </h2>
              </div>
              <p className="text-gray-400 mb-4 italic">First written version: 1906</p>
              
              <div className="bg-gradient-to-r from-red-900/20 to-blue-900/20 rounded-lg p-6 mb-6 border border-gray-700">
                <div className="prose prose-invert max-w-none">
                  <div className="text-gray-300 leading-relaxed space-y-4 font-serif italic">
                    <p>Sta mattina mi sono alzato<br/>
                    O bella, ciao! bella, ciao! bella, ciao, ciao, ciao!<br/>
                    Sta mattina mi sono alzato<br/>
                    E ho trovato l'invasor</p>

                    <p>O partigiano, portami via<br/>
                    O bella, ciao! bella, ciao! bella, ciao, ciao, ciao!<br/>
                    Partigiano, portami via<br/>
                    Ché mi sento di morir</p>

                    <p>E se io muoio da partigiano<br/>
                    O bella, ciao! bella, ciao! bella, ciao, ciao, ciao!<br/>
                    E se muoio da partigiano<br/>
                    Tu mi devi seppellir</p>

                    <p>E seppellire lassù in montagna<br/>
                    O bella, ciao! bella, ciao! bella, ciao, ciao, ciao!<br/>
                    Seppellire lassù in montagna<br/>
                    Sotto l'ombra di un bel fior</p>

                    <p>Tutte le genti che passeranno<br/>
                    O bella, ciao! bella, ciao! bella, ciao, ciao, ciao!<br/>
                    E le genti che passeranno<br/>
                    Mi diranno Che bel fior!</p>

                    <p>È questo il fiore del partigiano<br/>
                    O bella, ciao! bella, ciao! bella, ciao, ciao, ciao!<br/>
                    Questo è il fiore del partigiano<br/>
                    Morto per la libertà</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-red-300 mb-3">A Century of Protest</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Bella Ciao started as an Italian protest song over 100 years ago. It was first sung by women working in rice fields to protest poor working conditions. Later, during World War II, it was used by The Partisans—ordinary people fighting against the fascist government and Nazi occupation—and tells the story of someone leaving to fight for freedom, knowing they might not come back.
                  </p>
                  <p>
                    Over time, Bella Ciao spread around the world and became a song people sing when they are fighting for justice. It&apos;s been sung by freedom movements ever since—in dozens of languages, across every continent.
                  </p>
                  <p>
                    Singing Bella Ciao today shows that we reject dictators, monarchs, and anyone who tries to control people&apos;s rights. It connects us to others in history who fought for equality, democracy, and the power of the people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-400 text-sm">
            <a 
              href="https://www.facebook.com/people/Indy-Next-Gen/61578232028482/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors underline"
            >
              Follow Indy Next Gen on Facebook
            </a>
            {' '}and join our Discord
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Fighting Dictatorship Together • Rejecting Kings Since 1776
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDashboard;