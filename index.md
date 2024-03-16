---
title: Basic Example of Virtra Note
# author:
#   - name: The Living Papers Team
#     org: University of Washington
# keywords: [all, about, my, article]
output:
  html:
    selfContained: true
    styles: styles.css
---

~~~ js { hide=true }
laser_indexes = null
---
current_vis = ''
~~~

::: aside { .margin .sticky .laser-trail }
[:draw-elements:]{
  laserTrails = `laser_indexes`
  currentVis = `current_vis`
}
:::

# Summary
## Analysis of Napoleon's March Visualization

Alice commenced the dialogue by highlighting the significance of [the red band](`laser_indexes=[0], current_vis="1920px-Minard_Update.png"`) in a visual representation, which illustrates Napoleon's retreat from Moscow during the cold winter, correlating with temperature and time scales. She encouraged a discussion on the key events of Napoleon's march, including their timing, locations, and causes.

Bob proposed examining the key events of Napoleon's march from left to right. He pointed out the presence of [vertical lines](`laser_indexes=[4], current_vis="1920px-Minard_Update.png"`) that connect the timeline with the weather, correlating with the [actual time band](`laser_indexes=[5], current_vis="1920px-Minard_Update.png"`) of the campaign to represent the number of soldiers. He initially misinterpreted the width at a certain point as representing 8,000 soldiers but later corrected himself, acknowledging that the starting number of soldiers was actually 400,000.

Alice clarified that [the start of the march](`laser_indexes=[14], current_vis="1920px-Minard_Update.png"`) could be identified by the large width of the band, indicating the initial size of Napoleon's army. She noted [divisions](`laser_indexes=[16], current_vis="1920px-Minard_Update.png"`) along the march, signifying separations where portions of the army diverged, such as 22,000 soldiers heading towards a specific direction and others moving towards Vilnius. Alice described how the army's size diminished significantly by the time they reached Moscow and even more so during their retreat.

Bob corrected his earlier mistake, acknowledging that the number 8,000 referred to the returning soldiers, and confirmed the initial strength of Napoleon's army as 400,000. Alice added that blue colors in the visual might represent rivers, while the red and black colors could indicate the army's advance towards Moscow and its subsequent retreat. She also mentioned that regions were highlighted in italic for emphasis.

Bob observed inconsistencies in the representation of dates and noted that the timeline was not linear, suggesting that the annotations and [vertical lines](`laser_indexes=[55], current_vis="1920px-Minard_Update.png"`) did not have a direct relationship with time on a horizontal basis. He realized that the timeline actually progresses in the opposite direction than initially thought, with the retreat marked by black lines and specific dates and pressures.

Alice and Bob concluded their discussion by acknowledging their analysis of the type, location, and timing of events, though they admitted difficulty in determining the causes of events due to a lack of detailed historical knowledge. They decided to move on to the next visualization, with Bob noting that changing the visualization on his screen would also change it for Alice.

## Exploring Urban Segregation in US Cities

Alice commenced the second part of their discussion by introducing five maps that depict segregation conditions in various U.S. cities, with each dot representing 120 individuals and different colors indicating various ethnic groups. The task involved identifying patterns of neighborhood segregation, comparing cities, and discussing findings related to the patterns of segregation.

Bob acknowledged the task, noting the presence of five maps and briefly mentioning Montana. Alice clarified that the colors on the maps correspond to different races, with black represented by blue and Hispanic by orange.

Bob corrected a misunderstanding regarding the term "ethical group," suggesting it was a typo and should have been "ethnical group." Alice inquired about the location of the typo, and Bob indicated he had highlighted it. Alice emphasized the significance of each dot representing 120 people.

The discussion moved to analyzing New York, where Alice observed a majority of white individuals in Manhattan, along with some Asians and blacks. Hispanic individuals were noted around specific areas, with intersections between black and Hispanic populations in certain regions, predominantly white.

Bob and Alice then discussed Brooklyn, noting the majority presence of black and Hispanic individuals and a gradient of racial distribution moving away from Manhattan, indicating a diverse mix including black, Asian, and Hispanic individuals in certain areas.

The conversation shifted to Chicago, comparing it with New York. Alice noted a difference in the presence of Asian individuals between the two cities, with Chicago having a concentrated Asian population in one area, unlike New York's broader Asian distribution. Bob observed a clearer racial mixture in New York compared to Chicago's linear separability among ethnic groups.

Alice pointed out that the upper coast of Chicago had more white individuals, while the lower coast had a mix of black and Hispanic people. They noted the spread of the population in Chicago compared to the denser population in Manhattan, New York.

The discussion then moved to Los Angeles, California, where Alice observed a significant Hispanic population, contrasting with her expectation of a predominantly white population similar to Manhattan, New York. Bob highlighted Hollywood's diverse population, including white and Latina individuals. Alice remarked on the coastal areas being predominantly white and the similarity in diversity patterns between Los Angeles and Chicago.

Bob commented on New York's dense regions due to its high population, while Alice mentioned New York's global popularity and its significance in trade and commerce.

The conversation concluded with an analysis of Boston, comparing it to Chicago and noting the presence of Asian individuals, albeit not clustered. Alice summarized that among the four cities discussed, New York was the densest, followed by Chicago, Los Angeles, and Boston, with Boston having a predominantly white population and New York showcasing the most diversity.

Bob agreed with Alice's assessment regarding diversity, and Alice added a final observation on Los Angeles's larger area compared to New York's smaller but denser city structure.

## Comparative Analysis of Urban and Rural Segregation

Bob suggested moving on to analyze the remaining two visual representations.

Alice then mentioned that they were examining five maps showing segregation patterns in different U.S. cities. Bob acknowledged the repetition, indicating they were revisiting a familiar topic.

Alice identified one of the maps as predominantly featuring white populations, a characteristic she associated with Utah, noting the presence of a university where a significant number of white students study, thus influencing the demographic composition of the area.

Bob described the demographic distribution as straightforward, with limited density and diversity. He observed that the area primarily consisted of Hispanic populations with minimal Asian presence, concentrated around the university.

Alice pointed out that only [a specific region](`laser_indexes=[104], current_vis="SLC.jpg"`) was densely populated. She noted that areas like [Sanit Park](`laser_indexes=[105], current_vis="SLC.jpg"`) had sparse populations, with few people living around [there](`laser_indexes=[106], current_vis="SLC.jpg"`).

Bob concurred, attributing the sparse population to the mountainous geography of the area, while Alice added that most people resided in the city area.

Bob then observed a significant presence of pink dots on the maps, representing other racial or ethnic groups, indicating a level of diversity higher than previously noted. Upon reviewing the maps again, he realized he had overlooked the presence of these pink dots in other areas as well.

Alice acknowledged Bob's observation without further comment.

Bob suggested proceeding to the next map, remarking on the high density of populations in New York and Los Angeles. Alice highlighted the widespread presence of Hispanic populations, represented by orange dots, particularly dense in New York, Pennsylvania, Philadelphia, and Chicago.

Bob noted that aside from the California area, most of the visible dots were green, representing white populations, which seemed to overlap with other racial or ethnic groups due to their majority.

Alice elaborated that the majority of the areas were predominantly white, which explained the overlapping of white populations over other races. She also noted a division in population density, with the west coast being less densely populated compared to other areas. Despite the dominance of white populations, Alice observed the presence of black populations in certain areas.

Bob mentioned Atlanta and Washington D.C. as having significant black populations, while Alice identified Los Angeles as having a noticeable Hispanic population, attributing this to its proximity to Hispanic countries.

Bob concluded their analysis, signaling readiness to move on.

# Transcript
[(00:00:00)](`current_vis="1920px-Minard_Update.png"`) Alice:  So this I think. And the path of the Napoleon's retreat from Moscow from Moscow in the cold winter is depicted by [the red band](`laser_indexes=[0], current_vis="1920px-Minard_Update.png"`) which is tied to the temperature and time scales. Discuss key events of Napoleon's march. You can discuss the time location timing and cause of the events.

[(00:00:22)](`current_vis="1920px-Minard_Update.png"`) Bob:  Okay so yeah we can go by one from left to right about the discussions. So there is like the key events of Napoleon's march. So what do you think about the.

[(00:00:37)](`current_vis="1920px-Minard_Update.png"`) Alice:  I think you should start first with this one.

[(00:00:41)](`current_vis="1920px-Minard_Update.png"`) Bob:  Okay yeah sure. So about the events what I basically think. So first of all I can see a lot of vertical lines relating the timeline of the. So there is these [vertical lines](`laser_indexes=[4], current_vis="1920px-Minard_Update.png"`) and they are kind of relating the weather with the [actual time band](`laser_indexes=[5], current_vis="1920px-Minard_Update.png"`) of the party to correlate the amount of soldiers. So the width [here](`laser_indexes=[6], current_vis="1920px-Minard_Update.png"`) for example here this width is 8000. And these 8000 soldiers. These are soldiers. Right.

[(00:01:25)](`current_vis="1920px-Minard_Update.png"`) Alice:  I think this width is 400K. So you can see the 400 over here.

[(00:01:32)](`current_vis="1920px-Minard_Update.png"`) Bob:  Yeah I was talking about around the vertical line. So above the vertical line.

[(00:01:39)](`current_vis="1920px-Minard_Update.png"`) Alice:  Okay.

[(00:01:40)](`current_vis="1920px-Minard_Update.png"`) Bob:  So it's written probably [here](`laser_indexes=[11,12], current_vis="1920px-Minard_Update.png"`) 8000. And the date was December 7 and the weather was 26 degrees. So this is basically the main event where the key events were like the changes occurred.

[(00:02:10)](`current_vis="1920px-Minard_Update.png"`) Alice:  So I think that [this is the start of the march](`laser_indexes=[14], current_vis="1920px-Minard_Update.png"`). So that people as you can see over [here](`laser_indexes=[15], current_vis="1920px-Minard_Update.png"`) the width is really large. So that means that they were starting from [here](`laser_indexes=[14,15], current_vis="1920px-Minard_Update.png"`). And also you can see the numbers of the soldiers who were fighting. And some [here](`laser_indexes=[14], current_vis="1920px-Minard_Update.png"`) you can see that there is a [division](`laser_indexes=[15], current_vis="1920px-Minard_Update.png"`) right? So [this division](`laser_indexes=[16], current_vis="1920px-Minard_Update.png"`) indicates that 22,000 soldiers have gone from [to there](`laser_indexes=[17,18], current_vis="1920px-Minard_Update.png"`) and the rest are moving forward. And again there's a [division](`laser_indexes=[20], current_vis="1920px-Minard_Update.png"`) over [here](`laser_indexes=[21], current_vis="1920px-Minard_Update.png"`) in the [Vilnius](`laser_indexes=[22], current_vis="1920px-Minard_Update.png"`). I think Vilnius is a region in the country. So there is also a [division](`laser_indexes=[16,17,18,19], current_vis="1920px-Minard_Update.png"`) like [6000](`laser_indexes=[20,21,22,23], current_vis="1920px-Minard_Update.png"`) people who went [over there](`laser_indexes=[24,25,26,27], current_vis="1920px-Minard_Update.png"`) and then they fought in [pollots](`laser_indexes=[28,29,30,31], current_vis="1920px-Minard_Update.png"`). And then I think they reunited when the war was ended in Boba. And so that's how they are [marching](`laser_indexes=[24], current_vis="1920px-Minard_Update.png"`). But there is not any date [over here](`laser_indexes=[26], current_vis="1920px-Minard_Update.png"`). The date coincides with [this particular](`laser_indexes=[27], current_vis="1920px-Minard_Update.png"`) [these regions](`laser_indexes=[28], current_vis="1920px-Minard_Update.png"`) in [this way](`laser_indexes=[29], current_vis="1920px-Minard_Update.png"`). But when they were marching towards Moscow there is not a particular specific date or the temperature in [here](`laser_indexes=[26,27,28,29,30,31], current_vis="1920px-Minard_Update.png"`). In [Moscow](`laser_indexes=[24], current_vis="1920px-Minard_Update.png"`) they had a [war](`laser_indexes=[25], current_vis="1920px-Minard_Update.png"`) and then they were coming back from [Moscow](`laser_indexes=[26], current_vis="1920px-Minard_Update.png"`) to I think [this place](`laser_indexes=[27], current_vis="1920px-Minard_Update.png"`) [Konas](`laser_indexes=[28,29], current_vis="1920px-Minard_Update.png"`). And at [that time](`laser_indexes=[30,31], current_vis="1920px-Minard_Update.png"`) the soldiers even [reduced](`laser_indexes=[32,33], current_vis="1920px-Minard_Update.png"`) a lot.

[(00:03:39)](`current_vis="1920px-Minard_Update.png"`) Bob:  Now I see that I was actually mistaken. So this 8000 is actually with all these black. The returning number of soldiers. And [this](`laser_indexes=[39,41], current_vis="1920px-Minard_Update.png"`) 40,000 or 400,000? 400,000 is the width of the starting number of soldiers.

[(00:04:00)](`current_vis="1920px-Minard_Update.png"`) Alice:  Yes. There are blue colors which means that [these are like rivers in this regions](`laser_indexes=[42], current_vis="1920px-Minard_Update.png"`). And maybe the colors [the red and black represents](`laser_indexes=[44,45], current_vis="1920px-Minard_Update.png"`). The red represents that they are going to Moscow and black represents that they are returning. The war has ended. Something like that. That's why maybe the color annotation is. And also they have highlighted [the regions in italic](`laser_indexes=[46], current_vis="1920px-Minard_Update.png"`). So yeah I think that's one thing.

[(00:04:32)](`current_vis="1920px-Minard_Update.png"`) Bob:  I noticed is that there are some places where the dates are written but there are some places where the dates are not written for example here. And also the time in this x is not like [linear fashion](`laser_indexes=[52], current_vis="1920px-Minard_Update.png"`). So what I think is that [these annotations](`laser_indexes=[54], current_vis="1920px-Minard_Update.png"`) the [vertical line](`laser_indexes=[55], current_vis="1920px-Minard_Update.png"`) are just to indicate that those regions and time does not have any. What do I say? Time does not have any relation with the [horizontal basis](`laser_indexes=[55], current_vis="1920px-Minard_Update.png"`) in this figure.

[(00:05:15)](`current_vis="1920px-Minard_Update.png"`) Alice:  Yes I think so.

[(00:05:20)](`current_vis="1920px-Minard_Update.png"`) Bob:  Another thing is that you see that here it is November 14 and here it is again November 9. So this is going kind of like [backwards](`laser_indexes=[57], current_vis="1920px-Minard_Update.png"`). So yeah we can tell that the time actually goes [this direction](`laser_indexes=[58], current_vis="1920px-Minard_Update.png"`).

[(00:05:38)](`current_vis="1920px-Minard_Update.png"`) Alice:  Yes this direction.

[(00:05:39)](`current_vis="1920px-Minard_Update.png"`) Bob:  But initially I thought that it's like going from left to right but it's actually the opposite.

[(00:05:46)](`current_vis="1920px-Minard_Update.png"`) Alice:  So this red is going to this direction and this black is coming to this direction. So it's like going to Moscow. Going to Moscow and then having a war and then coming back. Lines. And the dates and pressure represents those black lines only because as you can see that there is a vertical line coming from this black lines to here not from these red ones. Yeah I think that's what this picture is about. This is an ideal visualization.

[(00:06:24)](`current_vis="1920px-Minard_Update.png"`) Bob:  So yeah we got the discussion about the type location. I think you discussed about it. The timing. I discussed about the dates and maybe causes of events. I have no idea. I'm very bad at history.

[(00:06:37)](`current_vis="1920px-Minard_Update.png"`) Alice:  So I think over here.

[(00:06:43)](`current_vis="1920px-Minard_Update.png"`) Bob:  Are there reasons written somewhere? I don't think so. Maybe in the text?

[(00:06:51)](`current_vis="1920px-Minard_Update.png"`) Alice:  No I didn't find any reason. It's just the description of the bar.

[(00:06:58)](`current_vis="1920px-Minard_Update.png"`) Bob:  Yeah I think we can move forward to the next visualization. So when I click it also changes for your screen.

[(00:07:07)](`current_vis="1920px-Minard_Update.png"`) Alice:  Right exactly. So this is the part two. And there are five maps showing different Us cities. Okay. Segregation conditions here. One dot represents 120 people. Different ethical group are colored in different colors. Your task for each map identify any patterns in how neighborhoods are segregated. Compare different cities. What similarities and difference do you notice in the patterns of segregation? And discuss any other findings.

[(00:07:44)](`current_vis="newYork.jpg"`) Bob:  Okay there are like five maps. I think it means these five maps total here. So these five maps there are like Montana. People are dropped.

[(00:07:59)](`current_vis="newYork.jpg"`) Alice:  Yes. And also the colors are based on the races. As you can see [over here](`laser_indexes=[63], current_vis="newYork.jpg"`) that there's black is blue color hispanic is orange.

[(00:08:14)](`current_vis="newYork.jpg"`) Bob:  Okay I see. Yeah. I actually misprint this. I mean it's written a little wrong. Maybe a typo. It should be ethnical group. Right. Not ethical.

[(00:08:26)](`current_vis="newYork.jpg"`) Alice:  Where is it written? Can you highlight the part?

[(00:08:29)](`current_vis="newYork.jpg"`) Bob:  I already did the highlighting.

[(00:08:32)](`current_vis="newYork.jpg"`) Alice:  No one dot. I mean [this particular single dot](`laser_indexes=[67], current_vis="newYork.jpg"`) represents 120 people. That's what this means.

[(00:08:40)](`current_vis="newYork.jpg"`) Bob:  Here. Different ethical groups are colored in different colors. I think this should be ethical.

[(00:08:52)](`current_vis="newYork.jpg"`) Alice:  That's just [a typo](`laser_indexes=[71], current_vis="newYork.jpg"`).

[(00:08:53)](`current_vis="newYork.jpg"`) Bob:  Yeah that's what I was talking about. All right so yeah. What is our task? Our task is for each map identify any patterns in how neighborhoods are segregated. So what do you think?

[(00:09:06)](`current_vis="newYork.jpg"`) Alice:  This is New York right? As you can see I think this.

[(00:09:09)](`current_vis="newYork.jpg"`) Bob:  Is Manhattan the whole middle section.

[(00:09:12)](`current_vis="newYork.jpg"`) Alice:  And as you can see that the majority of green portion is [here](`laser_indexes=[75], current_vis="newYork.jpg"`). So I think that white people most of the white people live in the Manhattan city along with some portion of Asians and some portion of black over here. And hispanic people live around [here](`laser_indexes=[75], current_vis="newYork.jpg"`) and [here](`laser_indexes=[76], current_vis="newYork.jpg"`). So there is a [union](`laser_indexes=[77], current_vis="newYork.jpg"`). Sorry an [intersection](`laser_indexes=[78], current_vis="newYork.jpg"`) between the black and the hispanic in [these regions](`laser_indexes=[79], current_vis="newYork.jpg"`). But in [this particular region](`laser_indexes=[79], current_vis="newYork.jpg"`) most of them are white right?

[(00:09:40)](`current_vis="newYork.jpg"`) Bob:  Yeah. Maybe we can say. So this is white. So this is like old black and hispanic. Oh Hispanic yes.

[(00:09:59)](`current_vis="newYork.jpg"`) Alice:  And this is a little bit asian.

[(00:10:06)](`current_vis="newYork.jpg"`) Bob:  And if you go like down south probably this is queens here. And. Oh this is Brooklyn and this is queen.

[(00:10:16)](`current_vis="newYork.jpg"`) Alice:  Okay so in Brooklyn the majority of black is here. I think it's black. Yes. Also hispanic as well. So as you can see that the more people go out from the main Manhattan city the more the white people as you can see right here.

[(00:10:49)](`current_vis="newYork.jpg"`) Bob:  So it's kind of like in a [gradient](`laser_indexes=[86], current_vis="newYork.jpg"`). So first of all if we don't look like on [this side](`laser_indexes=[87], current_vis="newYork.jpg"`) the region there's not much data or there's not much people. So starting from [Manhattan](`laser_indexes=[87], current_vis="newYork.jpg"`) we get white people and then the Asians I'm just ignoring them because they are not that much. But we start from [white people](`laser_indexes=[86], current_vis="newYork.jpg"`). And then there is kind of like a spare in [this part](`laser_indexes=[87], current_vis="newYork.jpg"`). This is kind of like surrounded with also white people.

[(00:11:25)](`current_vis="newYork.jpg"`) Alice:  Yes.

[(00:11:28)](`current_vis="newYork.jpg"`) Bob:  And then there is all the black diversity.

[(00:11:33)](`current_vis="newYork.jpg"`) Alice:  I think this is more like a diversity including black and asian and hispanic. This particular region if you think like [that](`laser_indexes=[90], current_vis="newYork.jpg"`).

[(00:11:42)](`current_vis="newYork.jpg"`) Bob:  Yeah. One more thing I actually found on the very far right [here](`laser_indexes=[93], current_vis="newYork.jpg"`) where you noted white is that there is a very good mixture of white and Asians. And Asians yes. Maybe some Hispanic. Because hispanic and asian are like orange and red. It's very hard to identify.

[(00:12:06)](`current_vis="newYork.jpg"`) Alice:  And this is also most probably a [black region](`laser_indexes=[95], current_vis="newYork.jpg"`). As you can see that these are all blue. So this is a mixture of I think asian and white.

[(00:12:20)](`current_vis="newYork.jpg"`) Bob:  What about the next pocket?

[(00:12:22)](`current_vis="newYork.jpg"`) Alice:  Yes.

[(00:12:25)](`current_vis="newYork.jpg"`) Bob:  This is Chicago.

[(00:12:27)](`current_vis="newYork.jpg"`) Alice:  Yeah. So compare different cities. What similarities and differences you notice in the patterns. So if we compare New York City with Chicago we can see that in Chicago there's not much. I mean in New York City there's probably more red.

[(00:12:45)](`current_vis="Chicago.jpg"`) Bob:  Yeah there is very little. I mean here I can see all the Asian.

[(00:12:51)](`current_vis="Chicago.jpg"`) Alice:  No white. These are all white.

[(00:12:55)](`current_vis="Chicago.jpg"`) Bob:  Yeah I was talking about this one.

[(00:12:57)](`current_vis="Chicago.jpg"`) Alice:  Oh yeah that's the only asian part of western. And this is also black region. So I think that in Chicago only this portion is concentrated with Asians. But in case of New York there are a lot of Asian.

[(00:13:11)](`current_vis="Chicago.jpg"`) Bob:  Yeah. I also find it like a very good mixture of different races in New York than Chicago. Yes Chicago is kind of like there's linear separability among. So you can kind of draw these kind of separators kind of differentiating.

[(00:13:34)](`current_vis="Chicago.jpg"`) Alice:  So I think the upper coast of the Chicago has more white people and the lower coast has black and hispanic. The mixture of black and hispanic people. As you can see over here there's more white people on the upper side here. And from here this is like black and hispanic mixture. Right?

[(00:13:55)](`current_vis="Chicago.jpg"`) Bob:  Yeah.

[(00:13:56)](`current_vis="Chicago.jpg"`) Alice:  So yeah another finding we I think found is that not much asian people are over here I think. I don't think they like spend their time.

[(00:14:06)](`current_vis="Chicago.jpg"`) Bob:  Yeah there is like very niche market for the asian people around downtown. I think.

[(00:14:19)](`current_vis="Chicago.jpg"`) Alice:  So. Also I can say another pattern is that as you can see that the dots represent 120 people. So the people in Chicago are more spreaded. But in case of New York City Manhattan is more dense as you can see that dense over here in comparison to Chicago I think. Let's go to another picture.

[(00:14:42)](`current_vis="newYork.jpg"`) Bob:  Yeah this is Los Angeles California.

[(00:14:44)](`current_vis="Chicago.jpg"`) Alice:  So this is a very variety of people I think I see mostly hispanic. Yes. I mean this portion of the people are hispanic.

[(00:14:57)](`current_vis="LosA.jpg"`) Bob:  Yeah this makes sense because. Okay. Yeah there is a lot of patients here also. A lot of patients near the volume I think here.

[(00:15:11)](`current_vis="LosA.jpg"`) Alice:  Yes. And this is a black region. So I think apart from the pregnant I drew most of them are like white. And this portion is like red.

[(00:15:25)](`current_vis="LosA.jpg"`) Bob:  Yeah. The whole northern part is for the white. And there is lot of LA site because it is close to Mexico.

[(00:15:40)](`current_vis="LosA.jpg"`) Alice:  Yes. But another thing is that Los Angeles is the heart of Hollywood. So I thought that more white people will be here like we saw in Manhattan City New York that most of the white people were in that particular island Manhattan. But here in this case in the Los Angeles the main part there are more hispanic people.

[(00:16:02)](`current_vis="LosA.jpg"`) Bob:  The Hollywood is [right here](`laser_indexes=[97], current_vis="LosA.jpg"`) where there is kind of like a good mixture of green. I mean white and Latina.

[(00:16:14)](`current_vis="LosA.jpg"`) Alice:  Most of the sea covered areas these coastal areas have white people. And also it's quite diverse. I mean I think the maps of Los Angeles and Chicago are a bit similar.

[(00:16:32)](`current_vis="LosA.jpg"`) Bob:  New York has a lot of very tense regions because probably of the population. New York has the highest population among all of these three states.

[(00:16:44)](`current_vis="newYork.jpg"`) Alice:  Yes I think it's a very popular city among all the people in the world. That's why I think that's. And also the case of trade and commerce is prevalent in think. Okay so this is.

[(00:17:03)](`current_vis="newYork.jpg"`) Bob:  Are.

[(00:17:03)](`current_vis="newYork.jpg"`) Alice:  I think we can separate Boston into three regions which are like white black.

[(00:17:10)](`current_vis="Boston.jpg"`) Bob:  This portion mostly white though.

[(00:17:12)](`current_vis="Boston.jpg"`) Alice:  Yes.

[(00:17:14)](`current_vis="Boston.jpg"`) Bob:  It is similar to the. I think it was Chicago. It is similar to Chicago in that there is not a lot of patience. There's a little mixture of black and Asians. They are very pointed but mostly white.

[(00:17:29)](`current_vis="Boston.jpg"`) Alice:  But Chicago had hispanic people as well. But in case of Boston it's only white. As you can see over here that Chicago was a mixture of hispanic and black and white as well.

[(00:17:40)](`current_vis="Boston.jpg"`) Bob:  Yeah. There is a good dense hispanic.

[(00:17:43)](`current_vis="Boston.jpg"`) Alice:  It's a very good mixture over here.

[(00:17:46)](`current_vis="Chicago.jpg"`) Bob:  Yeah. In Boston you can see that this region has a lot.

[(00:17:51)](`current_vis="Chicago.jpg"`) Alice:  Has a bit [asian people](`laser_indexes=[98], current_vis="Chicago.jpg"`) not much. And they are spread it around [over here](`laser_indexes=[99], current_vis="Boston.jpg"`) but they are not clustered together so it's hard to put them in a particular [cluster](`laser_indexes=[100], current_vis="Boston.jpg"`). So if we compare [these four images](`laser_indexes=[101], current_vis="Boston.jpg"`) I think New York is the most dense and then I think it's Chicago then Los Angeles and then Boston. Boston has most white people and New York City also has most white people but it also has all other diverse races.

[(00:18:24)](`current_vis="Boston.jpg"`) Bob:  So yeah based on diversity I will agree with you too.

[(00:18:29)](`current_vis="Boston.jpg"`) Alice:  Yeah. And the population I think is also more in.

[(00:18:38)](`current_vis="newYork.jpg"`) Bob:  LA.

[(00:18:39)](`current_vis="newYork.jpg"`) Alice:  Another thing is that LA is a lot more large in area. New York is a small city. Maybe that's why the population is tense over there. And in LA it's like spread it around because of its area.

[(00:18:52)](`current_vis="newYork.jpg"`) Bob:  So let's look at the other two.

[(00:18:55)](`current_vis="LosA.jpg"`) Alice:  Okay so there are five labs showing different US cities segregation commissions.

[(00:18:59)](`current_vis="SLC.jpg"`) Bob:  It's the same.

[(00:19:01)](`current_vis="SLC.jpg"`) Alice:  Yes. Okay so yeah this is I think white people.

[(00:19:05)](`current_vis="SLC.jpg"`) Bob:  This is mostly white. This is Utah our neighbor. We have like most of the people are white. There are some. We have our university here.

[(00:19:22)](`current_vis="SLC.jpg"`) Alice:  Yeah. Since a lot of white study at the university. So that this place has.

[(00:19:30)](`current_vis="SLC.jpg"`) Bob:  This is pretty straightforward. Not that dense and also not that diversity as well. It's only hispanic and no Asian a little asian around the university but that's all.

[(00:19:43)](`current_vis="SLC.jpg"`) Alice:  Yes. And as you can see that only [this region](`laser_indexes=[104], current_vis="SLC.jpg"`) is like dest. But if you go from [here](`laser_indexes=[105], current_vis="SLC.jpg"`) like Sanit park there's not much people live around [here](`laser_indexes=[106], current_vis="SLC.jpg"`).

[(00:19:55)](`current_vis="SLC.jpg"`) Bob:  Yeah it's just the mountains.

[(00:19:57)](`current_vis="SLC.jpg"`) Alice:  Yeah most of the people live in the city area.

[(00:20:01)](`current_vis="SLC.jpg"`) Bob:  Another thing I noticed is that there is a lot for pink dogs which is like other races other ethical groups which is a little diverse. More diverse than the others. Let me actually look at all the other ones. Oh it also had a lot of pink ones. Yeah I just overlooked those.

[(00:20:21)](`current_vis="Chicago.jpg"`) Alice:  Okay.

[(00:20:29)](`current_vis="SLC.jpg"`) Bob:  Let'S actually go to the next one. Oh this is the whole. Yeah New York is the most densest. And the La.

[(00:20:41)](`current_vis="TUS.jpg"`) Alice:  Hispanic people I think this is like orange all over [this portion](`laser_indexes=[113], current_vis="TUS.jpg"`). And New York Pennsylvania Philadelphia this is [the most dense](`laser_indexes=[114], current_vis="TUS.jpg"`). Also Chicago as well. Right.

[(00:20:52)](`current_vis="TUS.jpg"`) Bob:  So at this point basically aside from the California area I can only see most of the green dots and it's probably overlapping with all the others.

[(00:21:07)](`current_vis="TUS.jpg"`) Alice:  Yes because majority of the portions are [white](`laser_indexes=[118], current_vis="TUS.jpg"`). So that's why they are overlapping the other races. And also there's a division over here. As you can see that this portion is more densely population and the west coast is not much densely populated. Also due to the majority of the people being white we can't see much [other races](`laser_indexes=[118], current_vis="TUS.jpg"`). But here we can see that there are some black people over here. Over here as well.

[(00:21:40)](`current_vis="TUS.jpg"`) Bob:  Atlanta I had a lot of black people. I heard that also there is Washington DC.

[(00:21:47)](`current_vis="TUS.jpg"`) Alice:  Yeah this is Los Angeles I think since it's close to Hispanic. Yeah that's hispanic. And this is also. Most of them are like hispanic people. Yeah I think that's.

[(00:22:01)](`current_vis="TUS.jpg"`) Bob:  All right. So.
