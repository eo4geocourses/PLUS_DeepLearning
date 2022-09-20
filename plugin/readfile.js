
var text={
	//Chapter 1: Introduction and Welcome
	f0_0:"Let's get started!",
	f1_0:"Welcome to the EO-Lab course for Deep Learning for EO data processing on the EO Cloud with Tensorflor and pytorch! . You've already noticed that this course is designed in such a way that you can study the material on your own. All relevant documents, papers, and other external sources are provided. The content is conveyed through interactive sessions, meaning that chapters as well as exercises use multi-media content to  study the matter presented. Explore and enjoy!",
	//1.1 Content
	f2_0:"The following contents will be covered in this course.",
	f2_0_f_1:"First you will get an introduction to deep learning for earth observation.  How to use deep learning for landcover classfication and change detection",
	f2_0_f_2: "Followed by the explanation of convolutional neural networks",
	f2_0_f_3: "We will then show you an example in tensorflow", 
	f2_0_f_4:"Finally a summary will provide you the most important points of this course.",
	// 1.3 Introduction int DL in EO
	f3_0:"This satellite image was taken by the Sentinel 2 satellite, showing Salzburg. It will accompany us through the course showing the ending and start of each chapter.",
	f3_0_f:"Let us know start with the first chapter",
		// 1.3.1 Course Content	
		f3_1:" This chapter is seperated into two parts. In the first part the application of deep learning for classifying earth observation data will be explained. The theoretical workflow to create a convolutional neural network is shown in the second part.  ",
		//1.3.2 CNNs
		f3_2:"The general objective is to classify land cover in satellite imagery ussing convolutional neural networks. Also called CNNs.",
			f3_2_f_1:"There are different appraoches applied by deep learning. Supervised learning, which requires images and labels of the objects to be classified. They are feeded to a machine learning algorithm, which then provides the classification.",
			f3_2_f_2:"Supervised machine learning works with an artificial intellegence model. This model is trained with image and label data, based on this data the parameter of an algorthim are adjusted. The model learns and improves through training. Afterwards the model can then be sued to predict new images.",
			f3_2_f_3:"There exist different types of classification tasks for deep learning, which we will explain to you in the next slide. For the example in the end of the lecture we will use semantic segmentation.",
		//1.3.2 Classification tasks
			f3_3:"Overall there are fife different tasks which can be fullfilled using deep learning for image classification. First image classification and recognition. Here images are recognized according to the scene content and obtain one label. For instance airport. If single objects should be detected in a scene, the you need object detection. Here single objects are recognized and marked either with bounding boxes or delineated in more detail. Segmenation tasks combine object detection and classification. ",
			f3_3_f_1:"We will use semantic segmentation. But what is semantic segmentation?",
			f3_3_f_2:"Segmentation first creates image segments, which are used for object detection and classification. Semantic or image segmentation in contrast to instance segmentation assigns class probabilites to each pixel. Providing a very detailed prediction",
		//1.3.3 DL workflow
		f3_4:"Let us take a look at the general deep learning workflow for earth observation data. At first the input data has to be collected. There are different possibilites how to get input data, which will be described closer in the next slide.",
			f3_4_f_1:"In the next step a classificator and the model parameters have to be selected",
			f3_4_f_2:"Now the model is trained and the first classifcation is performed",
			f3_4_f_3:"The classification result has to be assessed and evaluated",
			f3_4_f_4:"If the classification is statisfying it can be used further. In case of a low prediction result new input data has to be collected to improve the model performance.",
	}