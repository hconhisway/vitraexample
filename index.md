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
1. **Napoleon's Retreat Visualization**: P3 introduces a visual representation of Napoleon's retreat from Moscow in 1812, highlighting the correlation between the army's size and temperature changes during the retreat. The red band indicates the army's size at various positions, while the dark band signifies the cold winter retreat [for the retreat](`laser_indexes=[0], current_vis="1920px-Minard_Update.png"`).

2. **Temperature and Army Size Correlation**: P3 and P4 discuss the relationship between temperature changes and the army's size. They note a direct correlation where the army's size decreases as temperatures drop, indicating significant losses during colder conditions.

3. **Misinterpretation and Clarification**: Initially, there's confusion about the correlation between the red path, representing the army's size, and temperature changes. P4 clarifies that as the temperature decreases, the band representing the army's size thins out, indicating a decrease in the army's size due to colder temperatures.

4. **Representation of Army Size**: P4 explains that the number of people present in Napoleon's army is represented by the width of [the colored stones](`laser_indexes=[5], current_vis="1920px-Minard_Update.png"`), further emphasizing the visual representation's significance in understanding the army's size throughout the retreat.

5. **Analysis of Segregation in U.S. Cities**: P3 and P4 analyze maps showing segregation conditions in different U.S. cities, where one dot represents 120 people, and different ethnic groups are colored differently. They observe significant segregation patterns, such as dense [red pockets](`laser_indexes=[7], current_vis="newYork.jpg"`) of black ethnicity and communities of Asian people tending to be in [the same community](`laser_indexes=[8], current_vis="newYork.jpg"`).

6. **Residential and Amenity Areas**: They identify [residential areas here](`laser_indexes=[14], current_vis="newYork.jpg"`) and [the amenity area](`laser_indexes=[13], current_vis="newYork.jpg"`), discussing the distribution of ethnic groups in these areas and noting the sparser population moving from inner city to the outskirts.

7. **Global Temperature and Climate Change Trends**: P3 and P4 discuss long-term trends in global temperature and climate change, noting a significant rise in temperature from 1880 to 2020, as indicated by [a black line](`laser_indexes=[64], current_vis="Chicago.jpg"`) where the temperature has [risen significantly](`laser_indexes=[65], current_vis="LosA.jpg"`) over the years.

8. **Storm Intensity Analysis**: They analyze the increase in storm intensity over the years, observing more category 5 storms and a general increase in the total number of storms. They note that category 4 storms have become the most prevalent, indicating that storms are getting stronger but not consistently reaching category 5 intensity.

# Transcript
P4:  And it looks like as they marched from December to October, it reduced.

P3:  Yeah. So the dark band is depicted as Moscow and the coal ventern retreat. So this is for [the retreat](`laser_indexes=[0], current_vis="1920px-Minard_Update.png"`). This is the army. So that's the cold winter is depicted by the dark bank. So the number of armies that decrease as actually directly correlated to the temperature rise. Is that what this looks like? Because the temperature here is less and here is more and the armies here are more and there is less. I see having a. Yes, go ahead.

P4:  I guess I'm kind of confused about, like, as they're going back.

P3:  It doesn't.

P4:  Look like the red path is connected to these temperatures, but just like, the dark path here. So I wonder if it's actually more like, as the temperature is going down, the band site is thinning out.

P3:  Oh, I was looking on the other side, like December to October. This makes more sense.

P4:  Yeah, I've kind of gone into it at first.

P3:  [Yeah](`laser_indexes=[3], current_vis="1920px-Minard_Update.png"`). Okay so as the temperature increases. So what you're trying to say is as the temperature decreases, the army increases.

P4:  I guess, but it just continues to decrease the size of the band.

P3:  Wait. Yeah. Wait. So the band width is the size of the army. How does [this](`laser_indexes=[4], current_vis="1920px-Minard_Update.png"`) make.

P4:  Yeah, I think because in this line, the number of people present is represented by the width of [the colored stones](`laser_indexes=[5], current_vis="1920px-Minard_Update.png"`).

P3:  Yeah. Um. Is there anything else that we're missing?

P4:  I guess other. Yeah, I guess the only other thing is it looks like they separated a lot. I think this means that they didn't all continue marching the same way. Other than that, I think that's pretty much it, yeah.

P3:  Should we go into the next one?

P4:  Yeah.

P3:  Okay.

P4:  Part two. Right.

P3:  Okay.

P4:  So there are five maps showing different us cities as segregation conditions. Here, one dot represents 120 people. Different ethical. Different ethical group are colored in different colors. I think different ethnic groups are colored in different colors. Our task is, for each map, identify any patterns in how neighborhoods are segregated, compare different cities. What similarities and differences do we notice in the patterns of segregation and any other findings?

P3:  One thing that I can see is, like, green is the white ethnicity, and that is very much largely populated in this area, which is the New York Bay area. I don't know what [this](`laser_indexes=[6], current_vis="newYork.jpg"`) is called.

P4:  I feel like it might say Manhattan, maybe.

P3:  And then this one, the one that is largely populated by black ethnicity.

P4:  Yeah, that's another big pocket. There's, like, very small but very dense [red pockets](`laser_indexes=[7], current_vis="newYork.jpg"`).

P3:  So it kind of shows, like, all the asian people are. Tend to be in [the same community](`laser_indexes=[8], current_vis="newYork.jpg"`). Orange are his pallets?

P4:  Yeah, this one's interesting. I feel like there's a mix of [other dots](`laser_indexes=[11], current_vis="newYork.jpg"`) as well. Like a few greens, a few red.

P3:  As well. It's like mix of everything.

P4:  This is blue and orange. So a lot of [hispanic and black](`laser_indexes=[12], current_vis="newYork.jpg"`).

P3:  Ethnic. Yeah.

P4:  I guess another thing is it's a lot sparser going from, I guess, inner city to the outside.

P3:  So these are like the skyscraper areas over here, whereas all the tech and all the big buildings are. This is like [the amenity area](`laser_indexes=[13], current_vis="newYork.jpg"`). What do you call [that area](`laser_indexes=[13], current_vis="newYork.jpg"`)? Like the people.

P4:  Probably more like [residential areas here](`laser_indexes=[14], current_vis="newYork.jpg"`).

P3:  Even though it's parse, we can see a lot of green dots.

P4:  Yeah.

P3:  Interesting.

P4:  I guess I'm [circling this](`laser_indexes=[17], current_vis="newYork.jpg"`) because I'm assuming it's people that literally live in these areas. I guess this is technically still, like, residential areas. It's just maybe apartment buildings and complexes instead of just houses, perhaps.

P3:  Yeah. So I think there is, like, a dense population in the center of New York. And then [these are](`laser_indexes=[18], current_vis="newYork.jpg"`), like [the more household residential areas](`laser_indexes=[18], current_vis="newYork.jpg"`). Like small house of specific types like we see in [Utah](`laser_indexes=[19], current_vis="newYork.jpg"`). I don't know. Yeah, I guess.

P4:  Do you want to try comparing the next.

P3:  Yes.

P4:  I'm looking at tripod.

P3:  Yes.

P4:  That's kind of interesting because there's a lot of very cut off, very straight cut off points.

P3:  Yeah, there's nothing over here in this specific area.

P4:  Might be a highway.

P3:  Might be. But there are, like, in the middle. There are, like, small, small areas where are maybe these are, like, [more monumental places](`laser_indexes=[22], current_vis="Chicago.jpg"`).

P4:  And it also looks like there's not a lot of mixing of the ethnic.

P3:  Groups, the ones that I see over on this side.

P4:  Yeah. I wonder what changes, I guess, past this point where it starts [mixing together](`laser_indexes=[24], current_vis="Chicago.jpg"`) a lot more.

P3:  Level.

P4:  Yeah. Looking at [the depth there](`laser_indexes=[25], current_vis="Chicago.jpg"`).

P3:  Compared to the first one, we can see that the population for the red is very less.

P4:  Yeah, that's also true. This is like [the main pocket](`laser_indexes=[26], current_vis="Chicago.jpg"`), I think.

P3:  Should we go to the next one?

P4:  Yeah. Los Angeles. There's a lot of orange all around, which is.

P3:  That of red. Like orange and red. Yeah. You can see the population of blue is, like, going down a lot. Significantly.

P4:  Yeah, I still mean south. [Yeah](`laser_indexes=[27], current_vis="LosA.jpg"`). Can see that, too. And then most of the green is [up here](`laser_indexes=[28], current_vis="LosA.jpg"`).

P3:  Yeah. There's a distinct, like, line between yours. Orange, blue, red. And then there's green hover.

P4:  Yeah.

P3:  [Line over here](`laser_indexes=[30], current_vis="LosA.jpg"`). What is in this area that. So many [red](`laser_indexes=[31], current_vis="LosA.jpg"`) and [orange dots](`laser_indexes=[32], current_vis="LosA.jpg"`).

P4:  Yeah. That's kind of interesting. I don't know what's keeping. Why aren't they more mixed up? The distinction is we can see over.

P3:  Here, it's like a big cluster of orange, but there's like sparse of dot, dot. You get [separate dots](`laser_indexes=[34], current_vis="LosA.jpg"`).

P4:  Yeah. This is kind of interesting. There's a lot of dismixing here.

P3:  Maybe that's a downtown, like [the media](`laser_indexes=[35], current_vis="LosA.jpg"`).

P4:  Yeah, that makes sense.

P3:  There are also like an [empty pocket over on the side](`laser_indexes=[36], current_vis="LosA.jpg"`).

P4:  Yeah. I wonder what that is.

P3:  [Maybe](`laser_indexes=[37], current_vis="LosA.jpg"`) [that](`laser_indexes=[38], current_vis="LosA.jpg"`) would make sense.

P4:  Yeah.

P3:  Over here.

P4:  Yeah. Interesting. [Compared to the other ones](`laser_indexes=[40], current_vis="LosA.jpg"`), sometimes a lot more [orange](`laser_indexes=[40], current_vis="LosA.jpg"`). The past one. Should you do the next one?

P3:  Yes.

P4:  So Boston, that's a lot of green.

P3:  Yeah, a lot of green. A little bit of blue.

P4:  Yeah.

P3:  Not much orange. Like few.

P4:  Yeah, just those two little bits. A little bit more [here](`laser_indexes=[41], current_vis="Boston.jpg"`).

P3:  Oh, yeah. That looks like red to me, though.

P4:  So you're staying here?

P3:  Yes. Highly densely populated in [this area](`laser_indexes=[43], current_vis="Boston.jpg"`). Mostly. Invite the queen.

P4:  It's kind of quick how it goes from pretty dense to very [sparse](`laser_indexes=[44], current_vis="Boston.jpg"`).

P3:  Yes, it's like [gradually increasing](`laser_indexes=[45], current_vis="Boston.jpg"`) from heavily more.

P4:  [Sorry.](`laser_indexes=[47], current_vis="Boston.jpg"`)

P3:  You can go ahead.

P4:  Sorry. I was going to say it's pretty consistent that it's just like [green](`laser_indexes=[48], current_vis="Boston.jpg"`) and then all the dogs separated.

P3:  Yeah, there's a whole lot of bunch of [blues over in here](`laser_indexes=[49,50], current_vis="Boston.jpg"`) and then not any other. You can see reds over here. [Over here](`laser_indexes=[49], current_vis="Boston.jpg"`) and then like, [over here](`laser_indexes=[50], current_vis="Boston.jpg"`).

P4:  [Yeah](`laser_indexes=[52], current_vis="Boston.jpg"`).

P3:  There'S [a lot of](`laser_indexes=[53], current_vis="Boston.jpg"`).

P4:  Also just like pockets of empty. No people, which makes sense, I guess there's just a lot of water around.

P3:  The one thing that I notice is like, if there's a water body and that. Exactly. The being gets highly densely populated. For example, in this part. This is highly densely populated over here. Probably [the main being downtown area](`laser_indexes=[54], current_vis="Boston.jpg"`) I can think of. [Interesting](`laser_indexes=[56], current_vis="Boston.jpg"`). Do we have any more?

P4:  I think that might be the last one for the cities. No. Do we want to look at the next one?

P3:  Yeah, sure. Okay.

P4:  Actually, I guess. Did you have any other thoughts about among all of the maps, any significant comparisons?

P3:  I can see that this one is very populated. Each and every other maps. You can see that there are sparse areas around. I was talking about the cities. Sorry. Yeah, I was talking about the New York one. You can see even if from this specific, from the small map itself, we can see that the New York one is like. We can see the color very clearly [green blotch](`laser_indexes=[57], current_vis="SeasonalTemp.jpg"`) rather than the other cities, whereas even though it is [highly populated](`laser_indexes=[58], current_vis="newYork.jpg"`), but more spread out like this. Reason populated. We have like a [big green lot](`laser_indexes=[59], current_vis="TUS.jpg"`) [over here](`laser_indexes=[60], current_vis="TUS.jpg"`). New blotch [over here](`laser_indexes=[60], current_vis="newYork.jpg"`). Red one over here. One thing I should [I populated](`laser_indexes=[62,63], current_vis="newYork.jpg"`).

P4:  Yeah. Because this was just a lot more density. The over map.

P3:  Should we go to something else?

P4:  Yeah, I guess part three is meant.

P3:  Can you analyze the long term trends and global temperature and climate change, discuss what you find from the graph, move to the next one once you finished.

P4:  Sorry. Trying to figure out how to click around. And now it's on the way. Okay, now I'm there.

P3:  So we are on the temperature cycle. So the colors, like the gradient, represents the number increasing years. So 1880 to 2020, which is [a black line](`laser_indexes=[64], current_vis="SeasonalTemp.jpg"`) where we can see clearly that the temperature has [risen significantly](`laser_indexes=[65], current_vis="Boston.jpg"`) [decreasing years](`laser_indexes=[66], current_vis="SeasonalTemp.jpg"`).

P4:  I'm kind of confused [what](`laser_indexes=[67], current_vis="Boston.jpg"`) the. I guess the slope of [these lines](`laser_indexes=[68], current_vis="SeasonalTemp.jpg"`).

P3:  Are supposed to be. I kind of think, like, this is the January, February, March. Like, this would be [the summer part](`laser_indexes=[69,70,71], current_vis="Chicago.jpg"`). That would make sense. Like from [January](`laser_indexes=[70], current_vis="LosA.jpg"`) it's going on. Then it gets [spring over here](`laser_indexes=[71], current_vis="Boston.jpg"`) and then winter, which is the. Oh, no, I think I did. Yeah. So this would be [the summer](`laser_indexes=[69,70,71], current_vis="SLC.jpg"`). Summer, then winter. Okay.

P4:  Yeah, I guess. I tried zooming out a bunch, but I think the axes might just be.

P3:  Cut off for me a bit. I do not have the x axis as well. I just assumed it should be like that because the worst temperature, which is minus two degree, and then this would be the minus plus two celsius.

P4:  Okay, that makes sense. So I think the entire line is like the course of a single year.

P3:  Yeah.

P4:  Okay.

P3:  Well, I think that I can see the temperature is rising every year.

P4:  [Yeah](`laser_indexes=[72], current_vis="TUS.jpg"`). And it seems to be [pretty consistent](`laser_indexes=[73], current_vis="SeasonalTemp.jpg"`). Like, there's no [anomalies during the years](`laser_indexes=[73], current_vis="LosA.jpg"`). They all make the same giant shapes.

P3:  And then. I don't know, with this, there's very less overlapping between them. So not every two years, like five years, has had the same temperature. Maybe there's like a [distinct](`laser_indexes=[74], current_vis="SeasonalTemp.jpg"`) [threats](`laser_indexes=[75], current_vis="SeasonalTemp.jpg"`) we can [see](`laser_indexes=[76], current_vis="SeasonalTemp.jpg"`).

P4:  Yeah, I guess. I can't tell if this jump in, like, the gradient from this orange to this more pink color is like just a drastic change in temperature or in time. It's kind of hard to tell true.

P3:  If you think that the orange is somewhere in the middle and then that's starting to get red or, like, [darker over here](`laser_indexes=[78], current_vis="SeasonalTemp.jpg"`) and then getting [more hotter](`laser_indexes=[79], current_vis="SeasonalTemp.jpg"`). Let's say [it's](`laser_indexes=[80,81,82,83], current_vis="SeasonalTemp.jpg"`). That's all I can see from [this curve](`laser_indexes=[84], current_vis="SeasonalTemp.jpg"`). Do we want to go to [another one](`laser_indexes=[85], current_vis="SeasonalTemp.jpg"`)?

P4:  Yeah, let's do that.

P3:  Okay.

P4:  So part three, can you analyze any long term trends in global temperatures and climate change? Discuss what you find from the graphs, move to the next one once you're finished.

P3:  Number of stones that we're getting. Is this what it's saying? Number of storms?

P4:  Yeah, I guess the [number of these specific types of storms](`laser_indexes=[86], current_vis="Storms.jpg"`). I guess there's [three different categories](`laser_indexes=[86,87], current_vis="Storms.jpg"`) for them.

P3:  Okay. Yeah. One thing is different with the coming years, we are getting more of the [get warrant category five](`laser_indexes=[88], current_vis="Storms.jpg"`) and [then](`laser_indexes=[89], current_vis="Storms.jpg"`). Yeah. So like total number is also getting higher.

P4:  Yeah.

P3:  I can see that.

P4:  And I was going to say like I wonder why. The cat threes have been pretty consistent, not rising too much, but I guess those storms have just advanced to be more intense ones.

P3:  Yeah. Also we have about euro, we have [minimum of the least amount of storms](`laser_indexes=[91], current_vis="Storms.jpg"`) we have ever bought strengthen. I think [the category four](`laser_indexes=[95], current_vis="Storms.jpg"`) is the most that we have got it from. Like category three is, [as you said](`laser_indexes=[95], current_vis="Storms.jpg"`), as [the consistent one](`laser_indexes=[95], current_vis="Storms.jpg"`), category four is [the most one](`laser_indexes=[95], current_vis="Storms.jpg"`) and category five is. So I guess the strongs are getting stronger to become a category four but not strong enough to become a category five.

P4:  Yeah, I feel like as time passes we'll see if it will end up being where [this category three and four and then cat five starts to go to faster rate](`laser_indexes=[96], current_vis="Storms.jpg"`) or if it'll like plateau.

P3:  Yes.

P4:  That was like to be bad.

P3:  Here's like [stagnant rise](`laser_indexes=[97], current_vis="Storms.jpg"`) and then [stagnant](`laser_indexes=[98], current_vis="Storms.jpg"`) and then I think there will again be a rise, but I'm guessing [go from the trench](`laser_indexes=[99], current_vis="Storms.jpg"`). [Yeah, hopefully not.](`laser_indexes=[100], current_vis="Storms.jpg"`) Hopefully not. Should we end the. Yeah, sure. Can you analyze any long term trends in the global temperature and climate change? Discuss what you find from the graph, move on to the next one once you finish.

P4:  Okay.

P3:  Yeah. So this is like fire hotspot. So basically the temperature rise in three different countries. Okay. It's not really the same country.

P4:  I guess it's fire activity in the countries.

P3:  [Oh, yeah.](`laser_indexes=[101], current_vis="FIrehotspot.jpg"`)

P4:  So maybe [hot areas](`laser_indexes=[102], current_vis="FIrehotspot.jpg"`) where it's a lot that fires can start.

P3:  I was assuming it to be more of like the wildfires that we get in the forest or stuff like that.

P4:  Okay, I see. So maybe not like it gets temporarily, like the temperature gets hot, but it's like its highest risk for fired.

P3:  Because how would NASA know where the fire, like a building is going to get a fire? Russia has the highest one. Hello.

