
module.exports.generate = (seed) => {
  var quotes = [
    "Here I am once more in this scene of dissipation and vice, and I begin already to find my morals corrupted.",
    "What dreadful hot weather we have! It keeps one in a continual state of inelegance.",
    "Next week I shall begin my operations on my hat, on which you know my principal hopes of happiness depend.",
    "I am very much obliged to my dear little George for his message - for his ''love'' at least; his ''duty'', I suppose, was only in consequence of some hint of my favourable intentions towards him from his father or mother. I am sincerely rejoiced, however, that I ever was born, since it has been the means of procuring him a dish of tea.",
    "'''I do not want people to be very agreeable, as it saves me the trouble of liking them a great deal.'''",
    "You deserve a longer letter than this; but it is my unhappy fate seldom to treat people so well as they deserve.",
    "'''I had a very pleasant evening, however, though you will probably find out that there was no particular reason for it; but I do not think it worth while to wait for enjoyment until there is some real opportunity for it.'''",
    "She would tell you herself that she has a very dreadful cold in her head at present; but I have not much compassion for colds in the head without fever or sore throat.",
    "I am rather impatient to know the fate of my best gown.",
    "I cannot help thinking that it is more natural to have flowers grow out of the head than fruit.",
    "I can recollect nothing more to say at present; perhaps breakfast may assist my ideas. I was deceived — my breakfast supplied only two ideas — that the rolls were good and the butter bad.",
    "In Paragon we met Mrs. Foley and Mrs. Dowdeswell with her yellow shawl airing out, and at the bottom of Kingsdown Hill we met a gentleman in a buggy, who, on minute examination, turned out to be Dr. Hall — and Dr. Hall in such very deep mourning that either his mother, his wife, or himself must be dead.",
    "Your abuse of our gowns amuses but does not discourage me; I shall take mine to be made up next week, and the more I look at it the better it pleases me. My cloak came on Tuesday, and, though I expected a good deal, the beauty of the lace astonished me. It is too handsome to be worn — almost too handsome to be looked at.",
    "I believe I drank too much wine last night at Hurstbourne; I know not how else to account for the shaking of my hand today. You will kindly make allowance therefore for any indistinctness of writing, by attributing it to this venial error.",
    "The General has got the gout, and Mrs. Maitland the jaundice. Miss Debary, Susan, and Sally, all in black, but without any stature, made their appearance, and I was as civil to them as their bad breath would allow me.",
    "We have been exceedingly busy ever since you went away. In the first place we have had to rejoice two or three times everyday at your having such very delightful weather for the whole of your journey...",
    "I have now attained the true art of letter-writing, which we are always told, is to express on paper exactly what one would say to the same person by word of mouth.",
    "You are very kind in planning presents for me to make, and my mother has shown me exactly the same attention; but as I do not choose to have generosity dictated to me, I shall not resolve on giving my cabinet to Anna till the first thought of it has been my own.",
    "Another stupid party last night; perhaps if larger they might be less intolerable, but here there were only just enough to make one card-table, with six people to look on and talk nonsense to each other.",
    "Mrs. B. and two young women were of the same party, except when Mrs. B. thought herself obliged to leave them to run round the room after her drunken husband. His avoidance, and her pursuit, with the probable intoxication of both, was an amusing scene.",
    "I cannot anyhow continue to find people agreeable; I respect Mrs. Chamberlayne for doing her hair well, but cannot feel a more tender sentiment. Miss Langley is like any other short girl, with a broad nose and wide mouth, fashionable dress and exposed bosom. Adm. Stanhope is a gentleman-like man, but then his legs are too short and his tail too long.",
    "It would have amused you to see our progress. We went up by Sion Hill, and returned across the fields. In climbing a hill Mrs. Chamberlayne is very capital; I could with difficulty keep pace with her, yet would not flinch for the world. On plain ground I was quite her equal. And so we posted away under a fine hot sun, she without any parasol or any shade to her hat, stopping for nothing, and crossing the churchyard at Weston with as much expedition as if we were afraid of being buried alive.",
    "We are to have a tiny party here tonight. I hate tiny parties, they force one into constant exertion.",
    "You will have a great deal of unreserved discourse with Mrs. K., I dare say, upon this subject, as well as upon many other of our family matters. Abuse everybody but me.",
    "Our little visitor has just left us, and left us highly pleased with her; she is a nice, natural, open-hearted, affectionate girl, with all the ready civility which one sees in the best children in the present day; so unlike anything that I was myself at her age, that I am often all astonishment and shame.",
    "You know how interesting the purchase of a sponge-cake is to me.",
    "The pleasures of friendship, of unreserved conversation, of similarity of taste and opinions will make good amends for orange wine.",
    "We spent Friday evening with our friends at the boarding-house, and our curiosity was gratified by the sight of their fellow-inmates, Mrs. Drew and Miss Hook, Mr. Wynne and Mr. Fitzhugh; the latter is brother to Mrs. Lance, and very much the gentleman. He has lived in that house more than twenty years, and poor man, is so totally deaf that they say he could not hear a cannon, were it fired close to him; having no cannon at hand to make the experiment, I took it for granted, and talked to him a little with my fingers, which was funny enough.",
    "I am gratified by her having pleasure in what I write, but I wish the knowledge of my being exposed to her discerning criticism may not hurt my style, by inducing too great a solicitude. I begin already to weigh my words and sentences more than I did, and am looking about for a sentiment, an illustration, or a metaphor in every corner of the room. Could my ideas flow as fast as the rain in the store-closet it would be charming.",
    "I am sorry to tell you that I am getting very extravagant, and spending all my money, and, what is worse for ''you'', I have been spending yours too.",
    "I give you joy of our new nephew, and hope if he ever comes to be hanged it will not be till we are too old to care about it.",
    "My head-dress was a bugle-band like the border to my gown, and a flower of Mrs Tilson’s. I depended upon hearing something of the evening from Mr. W. K., and am very well satisfied with his notice of me — \"A pleasing looking young woman\" — that must do; one cannot pretend to anything better now; thankful to have it continued a few years longer!",
    "How horrible it is to have so many people killed! And what a blessing that one cares for none of them!",
    "I will not say that your mulberry-trees are dead, but I am afraid they are not alive.",
    "Mr. Digweed has used us basely. Handsome is as handsome does; he is therefore a very ill-looking man.",
    "Let me know when you begin the new tea, and the new white wine. My present elegancies have not yet made me indifferent to such matters. I am still a cat if I see a mouse.",
    "He seems a very harmless sort of young man, nothing to like or dislike in him — goes out shooting or hunting with the two others all the morning, and plays at whist and makes queer faces in the evening.",
    "By the bye, as I must leave off being young, I find many ''douceurs'' in being a sort of ''chaperon'', for I am put on the sofa near the fire and can drink as much wine as I like.",
    "I cannot help hoping that ''many'' will feel themselves obliged to buy it. I shall not mind imagining it a disagreeable duty to them, so as they do it.",
    "Devereux Forester's being ruined by his vanity is extremely good, but I wish you would not let him plunge into a \"vortex of dissipation.\" I do not object to the thing, but I cannot bear the expression; it is such thorough novel slang, and so old that I daresay Adam met with it in the first novel he opened.",
    "Walter Scott has no business to write novels, especially good ones. It is not fair. He has fame and profit enough as a poet, and should not be taking the bread out of other people's mouths. I do not like him, and do not mean to like ''Waverley'' if I can help it, but fear I must.",
    "The Webbs are really gone! When I saw the waggons at the door, and thought of all the trouble they must have in moving, I began to reproach myself for not having liked them better, but since the waggons have disappeared my conscience has been closed again, and I am excessively glad they are gone.",
    "There are such beings in the world — perhaps one in a thousand — as the creature you and I should think perfection; where grace and spirit are united to worth, where the manners are equal to the heart and understanding; but such a person may not come in your way, or, if he does, he may not be the eldest son of a man of fortune, the near relation of your particular friend, and belonging to your own county.",
    "His having been in love with the aunt gives Cecilia an additional interest with him. I like the idea — a very proper compliment to an aunt! I rather imagine indeed that nieces are seldom chosen but out of compliment to some aunt or another. I daresay Ben Anna's husband was in love with me once, and would never have thought of ''you'' if he had not supposed me dead of scarlet fever.",
    "I wish I could finish stories as fast as you can. I am much obliged to you for the sight of Olivia, and think you have done for her very well; but the good-for-nothing father, who was  the real author of all her faults and sufferings, should not escape unpunished. I hope he hung himself, or took the surname of Bone or underwent some direful penance or other.",
    "I am quite honoured by your thinking me capable of drawing such a clergyman as you gave the sketch of in your note of Nov. 16th. But I assure you I am ''not''. The comic part of the character I might be equal to, but not the good, the enthusiastic, the literary. Such a man's conversation must at times be on subjects of science and philosophy, of which I know nothing; or at least be occasionally abundant in quotations and allusions which a woman who, like me, knows only her own mother-tongue, and has read little in that, would be totally without the power of giving. A classical education, or at any rate a very extensive acquaintance with English literature, ancient and modern, appears to me quite indispensable for the person who would do any justice to your clergyman; and I think I may boast myself to be, with all possible vanity, the most unlearned and uninformed female who ever dared to be an authoress.",
    "He and I should not in the least agree, of course, in our ideas of novels and heroines. '''Pictures of perfection, as you know, make me sick and wicked;''' but there is some very good sense in what he says, and I particularly respect him for wishing to think well of all young ladies; it shows an amiable and a delicate mind. And he deserves better treatment than to be obliged to read any more of my works.",
    "I could no more write a romance than an epic poem. I could not sit seriously down to write a serious romance under any other motive than to save my life; and if it were indispensable for me to keep it up and never relax into laughing at myself or other people, I am sure I should be hung before I had finished the first chapter. No, I must keep to my own style and go on in my own way; and though I may never succeed again in that, I am convinced that I should totally fail in any other.",
    "We saw a countless number of post-chaises full of boys pass by yesterday morning — full of future heroes, legislators, fools, and villains. You have never thanked me for my last letter, which went by the cheese. I cannot bear not to be thanked.",
    "I give you joy of having left Winchester. Now you may own how miserable you were there; now it will gradually all come out, your crimes and your miseries — how often you went up by the Mail to London and threw away fifty guineas at a tavern, and how often you were on the point of hanging yourself, restrained only, as some ill-natured aspersion upon poor old Winton has it, by the want of a tree within some miles of the city.",
    "What should I do with your strong, manly, spirited sketches, full of variety and glow? How could I possibly join them on to the little bit (two inches wide) of ivory on which I work with so fine a brush, as produces little effect after much labour?",
    "I would recommend to her and Mr. D. the simple regimen of separate rooms.",
    "Single women have a dreadful propensity for being poor, which is one very strong argument in favour of matrimony.",
    "Many thanks for your kind care for my health; I certainly have not been well for many weeks, and about a week ago I was very poorly. I have had a good deal of fever at times, and indifferent nights; but I am considerably better now and am recovering my looks a little, which have been bad enough — black and white, and every wrong colour. I must not depend upon being ever very blooming again. Sickness is a dangerous indulgence at my time of life.",
    "I know no better way, my dearest Edward, of thanking you for your affectionate concern for me during my illness than by telling you myself, as soon as possible, that I continue to get better. I will not boast of my handwriting; neither that nor my face have yet recovered their proper beauty, but in other respects I am gaining strength very fast. I am now out of bed from 9 in the morning to 10 at night: upon the sofa, 'tis true, but I eat my meals with Aunt Cass in a rational way, and can employ myself, and walk from one room to another. Mr. Lyford says he will cure me, and if he fails, I shall draw up a memorial and lay it before the Dean and Chapter, and have no doubt of redress from that pious, learned, and disinterested body.",
    "Sophia shrieked and fainted on the ground—I screamed and instantly ran mad! We remained thus mutually deprived of our senses some minutes, and on regaining them were deprived of them again. For an hour and a quarter did we continue in this unfortunate situation.",
    "It was in this reign that Joan of Arc reigned and made such a ''row'' among the English.",
    "There were several Battles between the Yorkists and the Lancastrians, in which the former (as they ought) usually won.",
    "She Mary I married Philip King of Spain, who in her sister's reign, was famous for building Armadas.",
    "\"I am afraid\", replied Elinor, \"that the pleasantness of an employment does not always evince its propriety.\"",
    "People always live forever when there is an annuity to be paid them.",
    "It is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife.",
    "To be fond of dancing was a certain step towards falling in love.",
    "Happiness in marriage is entirely a matter of chance.",
    "One cannot be always laughing at a man without now and then stumbling on something witty.",
    "For what do we live, but to make sport for our neighbors and laugh at them in our turn?",
    "One does not love a place the less for having suffered in it, unless it has been all suffering, nothing but suffering.",
    "A lady, without a family, was the very best preserver of furniture in the world.",
    "It was, perhaps, one of those cases in which advice is good or bad only as the event decides.",
    "A large income is the best recipe for happiness I ever heard of.",
    "An engaged woman is always more agreeable than a disengaged. She is satisfied with herself. Her cares are over, and she feels that she may exert all her powers of pleasing without suspicion. All is safe with a lady engaged: no harm can be done.",
    "We do not look in great cities for our best morality.",
    "She was of course only too good for him; but as nobody minds having what is too good for them, he was very steadily earnest in the pursuit of the blessing...",
    "I speak what appears to me the general opinion; and where an opinion is general, it is usually correct.",
    "Let other pens dwell on guilt and misery.",
    "\"I shall soon be rested,\" said Fanny; \"to sit in the shade on a fine day, and look upon verdure, is the most perfect refreshment.\"",
    "it will, I believe, be everywhere found, that as the clergy are, or are not what they ought to be, so are the rest of the nation.",
    "It is a lovely night, and they are much to be pitied who have not been taught to feel, in some degree, as you do; who have not, at least, been given a taste for Nature in early life. They lose a great deal.",
    "But there certainly are not so many men of large fortune in the world as there are pretty women to deserve them.",
    "One half of the world cannot understand the pleasures of the other.",
    "Business, you know, may bring money, but friendship hardly ever does.",
    "...why did we wait for any thing? — why not seize the pleasure at once? — How often is happiness destroyed by preparation, foolish preparation!",
    "Human nature is so well disposed towards those who are in interesting situations, that a young person, who either marries or dies, is sure of being kindly spoken of.",
    "Surprizes are foolish things.  The pleasure is not enhanced, and the inconvenience is often considerable.",
    "There are people who the more you do for them, the less they will do for themselves.",
    "Ah! there is nothing like staying at home for real comfort.",
    "One has not great hopes from Birmingham. I always say there is something direful in the sound...",
    "To look almost pretty is an acquisition of higher delight to a girl who has been looking plain for the first fifteen years of her life than a beauty from her cradle can ever receive.",
    "A woman, especially if she has the misfortune of knowing anything, should conceal it as well as she can.",
    "Could they be perpetrated without being known, in a country like this, where social and literary intercourse is on such a footing, where every man is surrounded by a neighbourhood of voluntary spies, and where roads and newspapers lay everything open?",
    "...from politics, it was an easy step to silence.",
    "It would be mortifying to the feelings of many ladies, could they be made to understand how little the heart of man is affected by what is costly or new in their attire.",
    "A very short trial convinced her that a curricle was the prettiest equipage in the world",
    "The person, be it gentleman or lady, who has not pleasure in a good novel must be intolerably stupid",
  ];

  return quotes[Math.floor(Math.random() * quotes.length)];
};
