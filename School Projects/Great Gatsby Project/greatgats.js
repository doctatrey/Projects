document.getElementById('reflection-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const reflectionText = document.getElementById('reflection').value;
  const reflectionDiv = document.createElement('div');
  reflectionDiv.textContent = reflectionText;
  document.getElementById('user-reflections').appendChild(reflectionDiv);
  document.getElementById('reflection').value = '';
});

var timelineData = {
    "title": {
        "media": {
            "url": "https://m.media-amazon.com/images/I/71ltzulo0dL._AC_UF1000,1000_QL80_.jpg",
            "caption": "The American Dream"
        },
        "text": {
            "headline": "The Evolution of the American Dream",
            "text": "Explore how the concept of the American Dream has changed from the 1920s to today."
        }
    },
    "events": [
        {
            "media": {
                "url": "https://www.marketplace.org/wp-content/uploads/2021/04/GettyImages-3354051.jpg?w=600",
                "caption": "1920s: The Roaring Twenties"
            },
            "start_date": {
                "year": "1920"
            },
            "text": {
                "headline": "The Roaring Twenties",
                "text": "In the 1920s, the American Dream was about getting rich and having fun. Many people, like Jay Gatsby in 'The Great Gatsby,' believed that money could buy happiness. Gatsby threw big parties and had a lot of wealth, but he was still not happy. For example, Gatsby's extravagant parties were filled with people he hardly knew, showing that his wealth brought him attention but not true friends. This shows that while people thought wealth was the key to a good life, it often didn't bring true happiness. Gatsby's love for Daisy Buchanan was also part of his dream, but he never fully achieved it because he tried to recreate the past."
            }
        },
        {
            "media": {
                "url": "https://i.insider.com/5f6a94ad862a00001153f6ab?width=700",
                "caption": "1930s: The Great Depression"
            },
            "start_date": {
                "year": "1930"
            },
            "text": {
                "headline": "The Great Depression",
                "text": "Although 'The Great Gatsby' is set in the 1920s, the Great Depression that followed in the 1930s changed how people viewed the American Dream. The novel hints at the fragility of the dream by showing the downfall of its characters. Gatsby's wealth couldn't save him from his tragic end, mirroring the economic collapse that would soon affect the whole country. The hope and optimism of the 1920s were replaced by a focus on survival and stability during the Depression."
            }
        },
        {
            "media": {
                "url": "https://cdn.aarp.net/content/aarpe/en/home/politics-society/history/info-2020/wwii-history-remembered/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.932.jpeg/content/dam/aarp/politics/events-and-history/2020/07/1140x655-iwo-jima-flag-raising.jpg",
                "caption": "1940s: World War II"
            },
            "start_date": {
                "year": "1940"
            },
            "text": {
                "headline": "World War II",
                "text": "During World War II, the American Dream was about working together and hoping for a better future after the war. People valued hard work and sacrifice, much like Gatsby's determination, but for the good of everyone. This collective effort was different from Gatsby's individual pursuit of wealth. The war brought a sense of unity and purpose that contrasted with the selfish pursuits of characters like Tom Buchanan, who cared only for their own pleasure and status."
            }
        },
        {
            "media": {
                "url": "https://understandingrace.org/wp-content/uploads/2022/01/Levittown-NY.jpg",
                "caption": "1950s: Post-War Boom"
            },
            "start_date": {
                "year": "1950"
            },
            "text": {
                "headline": "Post-War Boom",
                "text": "In the 1950s, the American Dream was about having a house, a steady job, and living in the suburbs. This was different from Gatsby's dream of being wealthy and famous. People wanted stability and comfort for their families. The ideal life included a nice house in a suburban neighborhood, a car, and modern appliances. The dream of home ownership and a stable family life was a reaction to the instability and excess of the 1920s. While Gatsby's dream was flashy and extravagant, the 1950s dream was modest and family-oriented."
            }
        },
        {
            "media": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Civil_Rights_March_on_Washington%2C_D.C._%28Leaders_marching_from_the_Washington_Monument_to_the_Lincoln_Memorial%29_-_NARA_-_542010.jpg",
                "caption": "1960s: Civil Rights Movement"
            },
            "start_date": {
                "year": "1960"
            },
            "text": {
                "headline": "Civil Rights Movement",
                "text": "In the 1960s, the American Dream included fighting for equal rights and justice for everyone. Unlike Gatsby's personal dream of wealth, this dream was about making society fairer and giving everyone the same opportunities. The Civil Rights Movement pushed for changes that would allow all people to achieve their dreams. This era expanded the American Dream to include social justice and equality, challenging the exclusive and elitist world of East Egg and West Egg in 'The Great Gatsby.'"
            }
        },
        {
            "media": {
                "url": "https://azeriobserver.az/wp-content/uploads/2020/06/222.jpg",
                "caption": "2000s: The Digital Age"
            },
            "start_date": {
                "year": "2000"
            },
            "text": {
                "headline": "The Digital Age",
                "text": "In the 2000s, the American Dream changed with technology. It became about starting new tech companies and being innovative. Like Gatsby's dream of success, people wanted to be successful, but now it was in the digital world. Entrepreneurs like Steve Jobs and Mark Zuckerberg became symbols of the new American Dream. They showed that with a good idea and hard work, anyone could achieve success in the tech industry. The dream was now about innovation and making a global impact, reflecting Gatsby's own aspirations to rise above his humble beginnings and be recognized."
            }
        },
        {
            "media": {
                "url": "https://s33009.pcdn.co/wp-content/uploads/2023/11/AdobeStock_573877986-scaled.jpeg",
                "caption": "2020s: Modern Day"
            },
            "start_date": {
                "year": "2020"
            },
            "text": {
                "headline": "Modern Day",
                "text": "Today, the American Dream means different things to different people. It includes being happy, healthy, and part of a community. It also means thinking about the environment and future generations. In some ways, it goes back to Gatsby's deeper wish for love and belonging, while also addressing new challenges and opportunities in a complex world. For example, many people today dream of creating a sustainable lifestyle that balances personal success with caring for the planet. The dream now includes diverse perspectives and values, showing that the core desire for a better life remains, even as the details change."
            }
        }
    ]
};

window.timeline = new TL.Timeline('timeline-embed', timelineData);

// Function to display a bubble with information when an event is clicked
document.getElementById('timeline-embed').addEventListener('click', function(event) {
    var target = event.target;
    if (target && target.closest('.tl-node')) {
        var bubble = document.getElementById('bubble');
        var content = target.closest('.tl-node').querySelector('.tl-text .tl-media-content').innerHTML;
        bubble.innerHTML = content;
        bubble.style.left = (event.pageX + 10) + 'px';
        bubble.style.top = (event.pageY + 10) + 'px';
        bubble.style.display = 'block';
    } else {
        var bubble = document.getElementById('bubble');
        bubble.style.display = 'none';
    }
});

// Quiz logic
const correctAnswers = {
  q1: 'b',
  q2: 'c',
  q3: 'b',
  q4: 'a',
  q5: 'c'
};

document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const results = document.getElementById('quiz-results');
  results.innerHTML = '';

  formData.forEach((answer, question) => {
    const button = document.querySelector(`input[name="${question}"][value="${answer}"]`).parentElement;
    if (correctAnswers[question] === answer) {
      button.style.color = 'green';
      button.innerHTML += ' ✔';
    } else {
      button.style.color = 'red';
      button.innerHTML += ' ✘';
    }
  });
});
